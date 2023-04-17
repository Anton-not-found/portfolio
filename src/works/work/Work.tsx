import React from 'react';
import s from './Work.module.css'

type WorkPropsType = {
    title: string
    description: string
}
export const Work = (props: WorkPropsType) => {
    return (
        <div className={s.work}>
                <div className={s.pictureProject}>
                    <button className={s.button}>Смотреть</button>
                </div>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
        </div>
    );
};

