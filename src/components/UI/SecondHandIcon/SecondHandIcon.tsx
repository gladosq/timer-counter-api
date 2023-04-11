import s from './SecondHandIcon.module.scss';
import React from 'react';

interface SecondHandIconProps {
    style: React.CSSProperties
}

export const SecondHandIcon = ({style}: SecondHandIconProps) => {
    return (
        <svg
            style={style}
            className={s.secondHand}
            width='3'
            height='140'
            viewBox='0 0 3 140'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <rect x='3' y='70' width='3' height='70' rx='1.5' transform='rotate(-180 3 70)'
                  fill='#606060'/>
        </svg>
    )
}
