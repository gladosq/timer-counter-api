import React, {useEffect, useState} from 'react';
import s from './Clocks.module.scss';
import {timeFetcher} from '../../api/time';
import {ClockIcon} from '../UI/ClockIcon/ClockIcon';
import {HourHandIcon} from '../UI/HourHandIcon/HourHandIcon';
import {SecondHandIcon} from '../UI/SecondHandIcon/SecondHandIcon';
import {MinuteHandIcon} from '../UI/MinuteHandIcon/MinuteHandIcon';
import {REFRESH_RATE_API_TIMEZONEDB, REFRESH_RATE_API_BROWSER} from '../../const/const';

const Clocks = () => {
    const [timeFirst, setTimeFirst] = useState<Date>(new Date());
    const [timeSecond, setTimeSecond] = useState<any>();

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeFirst(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const intervalSecond = setInterval(async () => {
            await timeFetcher().then(data => setTimeSecond(data.data));
        }, REFRESH_RATE_API_ABSTRACTAPI * 1000);

        return () => clearInterval(intervalSecond);
    }, [timeSecond]);

    return (

        <section className={s.clockWrapper}>
            <div className={s.clockInnerContainer}>
                <div className={s.clockInfo}>
                    <p>API браузера</p>
                    <span>{timeFirst.toLocaleTimeString()}</span>
                    <p>Refresh rate: {REFRESH_RATE_API_BROWSER} second</p>
                    <div className={s.clockTimeline} style={{animationDuration: `${REFRESH_RATE_API_BROWSER}s`}}></div>
                </div>
                <div className={`${s.clockInnerWrapper}`}>
                    <ClockIcon/>
                    <HourHandIcon
                        style={{transform: `rotate(${timeFirst.getHours() * 30 - 160}deg)`}}
                    />
                    <MinuteHandIcon
                        style={{transform: `rotate(${timeFirst.getMinutes() * 6 + 180}deg)`}}
                    />
                    <SecondHandIcon
                        style={{transform: `rotate(${timeFirst.getSeconds() * 6 - 180}deg)`}}
                    />
                </div>
            </div>

            <div className={s.clockInnerContainer}>
                <div className={s.clockInfo}>
                    <p>API timezonedb<br/>(America, Chicago)</p>
                    <span>
                        {(timeSecond && !timeSecond.error)
                            ? new Date(timeSecond.formatted).toLocaleTimeString()
                            : <span className={s.clockLoading}>Loading..</span>}
                    </span>
                    <p>Refresh rate: {REFRESH_RATE_API_TIMEZONEDB} seconds</p>
                    {timeSecond && (
                        <div
                            className={s.clockTimeline}
                            style={{animationDuration: `${REFRESH_RATE_API_TIMEZONEDB}s`}}
                        ></div>
                    )}
                </div>
                <div className={s.clockInnerWrapper}>
                    <ClockIcon/>
                    {timeSecond && (
                        <>
                            <HourHandIcon
                                style={{transform: `rotate(${new Date(timeSecond.formatted).getHours() * 30 - 160}deg)`}}
                            />
                            <MinuteHandIcon
                                style={{transform: `rotate(${new Date(timeSecond.formatted).getMinutes() * 6 + 180}deg)`}}
                            />
                            <SecondHandIcon
                                style={{transform: `rotate(${new Date(timeSecond.formatted).getSeconds() * 6 - 180}deg)`}}
                            />
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Clocks;
