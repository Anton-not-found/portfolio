import React from 'react';
import s from './Contacts.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";
export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title title={'Contacts'} />
                <form className={s.contactForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                </form>
                <button type="submit" className={s.button}>Send</button>
            </div>
        </div>
    );
};


