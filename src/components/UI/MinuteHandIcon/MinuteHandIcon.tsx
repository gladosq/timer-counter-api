import s from './MinuteHandIcon.module.scss';
import React from 'react';

interface MinuteHandIconProps {
    style: React.CSSProperties
}

export const MinuteHandIcon = ({style}: MinuteHandIconProps) => {
    return (
        <svg
            style={style}
            className={s.minuteHand}
            width='7'
            height='126'
            viewBox='0 0 7 126'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <rect width='6.5161' height='62.6338' rx='3.25805' fill='#606060'/>
        </svg>
    )
}
