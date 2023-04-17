import React from 'react';
import s from './RemoteWork.module.css'
export const RemoteWork = () => {
    return (
        <div className={s.remoteWork}>
            <div className={s.remoteWorkContainer}>
                <h3 className={s.title}>I am considering options for remote work</h3>
                <button className={s.button}>Hire me</button>
            </div>
        </div>
    );
};

