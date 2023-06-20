import React from 'react';
import s from './RemoteWork.module.css'
export const RemoteWork = () => {


    return (
        <div className={s.remoteWork} >
            <div className={s.remoteWorkContainer}>
                <h2 className={s.title}>Interested in working with me?</h2>
                <button className={s.button}>Hire Me!</button>
            </div>
        </div>
    );
};

