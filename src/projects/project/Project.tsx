import React from 'react';
import s from './Project.module.scss'

type ProjectsPropsType = {
    title: string
    description: string
    style: TodolistImagePropsType
}

type TodolistImagePropsType = {
    backgroundImage: string
}

export const Project = (props: ProjectsPropsType) => {

    const onClickHandler = () => {

    }

    return (
        <div className={s.project}>
            <div className={s.pictureProject} style={props.style}>
                <button onClick={onClickHandler} className={s.button}>Смотреть</button>
            </div>
            <div className={s.projectInfo}>
                <h4 className={s.projectTitle}>{props.title}</h4>
                <span className={s.description}>{props.description}</span>
            </div>

        </div>
    );
};

