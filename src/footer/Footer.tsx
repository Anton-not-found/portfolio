import React from 'react';
import s from './Footer.module.css'


export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footerContainer}>
                <h2 className={s.topText}>Anton Shurmanov</h2>
                <div className={s.socialIcons}>
                    <div className={s.socialIconItem}></div>
                    <div className={s.socialIconItem}></div>
                    <div className={s.socialIconItem}></div>
                    <div className={s.socialIconItem}></div>
                </div>
                <h3 className={s.botText}>© 2023 Все права защищены</h3>
            </div>
        </div>
    );
};

