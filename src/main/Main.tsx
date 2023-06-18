import React from 'react';
import s from './Main.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import myAva2 from '../assets/images/myAva2.jpg'

export const Main = () => {

    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    {/*<span>Hi</span>*/}
                    <h2>Hi, I'm Anton Shurmanov</h2>
                    <h1>I'm a Developer</h1>
                </div>
                <div className={s.photo}>
                    <img src={myAva2} alt={''}/>
                </div>
            </div>
        </div>
    );
};

