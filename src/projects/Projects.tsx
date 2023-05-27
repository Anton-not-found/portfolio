import React from 'react';
import s from './Projects.module.css'
import {Project} from "./project/Project";
import styleContainer from './../common/styles/Container.module.css'

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className= {`${styleContainer.container} ${s.projectsContainer}`}>
                <div className={s.title}>
                    <h2>Projects</h2>
                </div>
                <div className={s.projects}>
                    <Project title={'Какая-то моя работа'}
                             description={'Задача организации, в особенности же укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.'}/>
                    <Project title={'Ещё одна моя работа'}
                             description={'Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа систем массового участия. Значимость этих проблем настолько очевидна'}/>
                </div>
            </div>
        </div>
    );
};

