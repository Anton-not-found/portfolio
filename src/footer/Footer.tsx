import React from 'react';
import s from './Footer.module.css'
import {Boxes} from "./boxes/Boxes";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footerContainer}>
                <h2 className={s.topText}>Anton Shurmanov</h2>
                    <Boxes/>
                <h3 className={s.botText}>© 2023 Все права защищены</h3>
            </div>
        </div>
    );
};

