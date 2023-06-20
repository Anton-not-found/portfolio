import React from 'react';
import s from './Contacts.module.scss'


export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={s.contactsContainer}>
                <div className={s.contactText}>
                    <h2 className={s.title}>Let's get in touch</h2>
                    <p>
                        I enjoy discussing new projects. Please share as much info, as possible so we can get the most
                        out of our first catch-up.
                    </p>
                    <h3>Living In:</h3>
                    <p>Hkasjhf sdoh, s Dsswdd, LOL</p>
                    <h3>Call:</h3>
                    <p>(+090) 777 777 777</p>
                </div>
                <form className={s.contactForm}>
                    <div className={s.inputClass}>
                        <p>What is Your Name:</p>
                        <input type="text"/>
                    </div>
                    <div className={s.inputClass}>
                        <p>Your Email Address:</p>
                        <input type="text"/>
                    </div>
                    <div className={s.inputClass}>
                        <p>How can I Help you?:</p>
                        <textarea/>
                    </div>
                    <button type="submit" className={s.button}>Send</button>
                </form>


            </div>
        </div>
    );
};


