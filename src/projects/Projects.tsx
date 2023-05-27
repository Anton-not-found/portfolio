import React from 'react';
import s from './Projects.module.css'
import {Project} from "./project/Project";


export const Projects = () => {
    return (
        <div className={s.projects}>
            <div className={s.projectsContainer}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.project}>
                    <Project title={'Какая-то моя работа'}
                          description={'Задача организации, в особенности же укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.'}/>
                    <Project title={'Ещё одна моя работа'}
                          description={'Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа систем массового участия. Значимость этих проблем настолько очевидна'}/>
                </div>
            </div>
        </div>
    );
};

