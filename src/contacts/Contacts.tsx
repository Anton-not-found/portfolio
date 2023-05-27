import React from 'react';
import s from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={s.contactsContainer}>
                <h2 className={s.title}>Contacts</h2>
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

