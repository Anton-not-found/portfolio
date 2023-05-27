import React from 'react';
import s from './Project.module.css'

type ProjectsPropsType = {
    title: string
    description: string
}
export const Project = (props: ProjectsPropsType) => {
    return (
        <div className={s.project}>
                <div className={s.pictureProject}>
                    <button className={s.button}>Смотреть</button>
                </div>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
        </div>
    );
};

