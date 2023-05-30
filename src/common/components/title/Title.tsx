import React from 'react';
import s from './Title.module.scss'


type TitlePropsType = {
    title: string
}
export const Title = (props: TitlePropsType) => {
    return (
        <div className={s.title}>
            <div className={s.textTitle}>{props.title}</div>
        </div>
    );
};

