import React from 'react';
import s from './Boxes.module.css'

export const Boxes = () => {
    return (
        <div className={s.boxes}>
            <div className={s.boxOne}></div>
            <div className={s.boxOne}></div>
            <div className={s.boxOne}></div>
            <div className={s.boxOne}></div>
        </div>
    );
};

