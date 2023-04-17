import React from 'react';
import s from './Main.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.containerMain}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Anton Shurmanov</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

