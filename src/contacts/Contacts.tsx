import React from 'react';
import s from './Contacts.module.css'
import {Contact} from "./contact/Contact";

export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={s.contactsContainer}>
                <h2 className={s.title}>Contacts</h2>
                <div className={s.pole}>
                    <Contact/>
                </div>
                <button className={s.button}>Отправить</button>
            </div>
        </div>
    );
};

