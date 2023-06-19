import React from 'react';
import s from './RemoteWork.module.css'
import hireMe from '../assets/images/hireMe.jpg'
export const RemoteWork = () => {

    const workingForMyImagesStyle = {

        backgroundImage: `url(${hireMe})`,
        // backgroundRepeat: 'no-repeat',


    }

    return (
        <div className={s.remoteWork} style={workingForMyImagesStyle }>
            <div className={s.remoteWorkContainer}>
                <h2 className={s.title}>Interested in working with me?</h2>
                <button className={s.button}>Hire me!</button>
            </div>
        </div>
    );
};

