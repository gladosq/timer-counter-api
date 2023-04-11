import s from './HourHandIcon.module.scss';
import React from 'react';

interface HourHandIconProps {
    style: React.CSSProperties
}

export const HourHandIcon = ({style}: HourHandIconProps) => {
    return (
        <svg
            style={style}
            className={s.hourHand}
            width='11' height='112' viewBox='0 0 11 112' fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <rect width='11' height='56' rx='5.5' fill='#606060'/>
        </svg>
    )
}
