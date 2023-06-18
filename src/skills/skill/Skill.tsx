import React from 'react';
import s from './Skill.module.scss'



type SkillPropsType = {
    title:string
    description:string
    progressStyle:string
}
export const Skill = (props:SkillPropsType) => {

    const progress = {
        width: props.progressStyle
    }

    return (
        <div className={s.skill}>
            <h3 className={s.title}>{props.title}</h3>
            <div className={s.icons}>
                <div className={s.icon} style={progress}></div>
                <div className={s.progress}>{props.progressStyle}</div>
            </div>


            <span className={s.description}>{props.description} </span>
        </div>
    );
};

