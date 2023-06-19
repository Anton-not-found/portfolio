import React from 'react';
import s from './Skill.module.scss';



type SkillPropsType = {
    title: string
    description: string
    progressStyle: string
    iconStyle:string
}
export const Skill = (props: SkillPropsType) => {

    const progress = {
        width: props.progressStyle
    }

    return (
        <div className={s.skill}>
            <div className={s.skillObject}>
                <img src={props.iconStyle} alt={''}/>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <div className={s.icons}>
                <div className={s.icon} style={progress}></div>
                <div className={s.progress}>{props.progressStyle}</div>
            </div>


            <p className={s.description}>{props.description} </p>
        </div>
    );
};

