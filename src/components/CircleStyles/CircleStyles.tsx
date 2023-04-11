import React from 'react';
import s from './CirclyStyles.module.scss';

const CircleStyles = () => {
    return (
        <section className={s.cssTricks}>
            <h2>Полукруг стилями</h2>
            <ul className={s.cssTricksList}>
                <li className={s.cssTricksItem}>
                    <h3>1. С помощью одного блока</h3>
                    <div className={s.cssTrickItemOneBlock}></div>
                </li>
                <li className={s.cssTricksItem}>
                    <h3>2. С помощью псевдо</h3>
                    <div className={s.cssTrickItemPseudo}></div>
                </li>

                <li className={s.cssTricksItem}>
                    <h3>3. С помощью clip-path</h3>
                    <div className={s.cssTrickItemClip}>
                        <div className={s.cssTrickInner}>

                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default CircleStyles;
