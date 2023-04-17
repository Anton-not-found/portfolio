import React from 'react';
import s from './Works.module.css'
import {Work} from "./work/Work";


export const Works = () => {
    return (
        <div className={s.works}>
            <div className={s.worksContainer}>
                <h2 className={s.title}>My works</h2>
                <div className={s.work}>
                    <Work title={'Какая-то моя работа'}
                          description={'Задача организации, в особенности же укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.'}/>
                    <Work title={'Ещё одна моя работа'}
                          description={'Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа систем массового участия. Значимость этих проблем настолько очевидна'}/>
                </div>
            </div>
        </div>
    );
};

