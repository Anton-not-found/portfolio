import React from 'react';
import s from './Skills.module.css'
import {Skill} from "./skill/Skill";
import styleContainer from "../common/styles/Container.module.css";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className= {`${styleContainer.container} ${s.skillsContainer}`}  >
                <h2 className={s.title}>My skills</h2>
                <div className={s.skills}>
                    <Skill description={'Lorem Ipsum не только успешно пережил без заметных изменений пять веков.'} title={'HTML&CSS'}/>
                    <Skill description={'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор. '} title={'JS'}/>
                    <Skill description={'Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите.'} title={'React'}/>
                </div>
            </div>
        </div>
    );
};

