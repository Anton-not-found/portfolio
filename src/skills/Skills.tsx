import React from 'react';
import s from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={'My skills'}/>
                <div className={s.skills}>
                    <Skill description={'Lorem Ipsum не только успешно пережил без заметных изменений пять веков.'}
                           title={'HTML&CSS'}/>
                    <Skill description={'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор. '}
                           title={'JS'}/>
                    <Skill description={'Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите.'}
                           title={'React'}/>
                </div>
            </div>
        </div>
    );
};

