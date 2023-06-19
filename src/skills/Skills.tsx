import React from "react";
import s from "./Skills.module.scss";
import {Skill} from "./skill/Skill";
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";
import js from "../assets/images/js.svg";
import react from "../assets/images/react.svg";
import css from "../assets/images/css.svg";

export type ProgressStyleType = {
    htmlProgress:string
    jsProgress:string
    reactProgress:string
}
export const Skills = () => {

    const progressStyle: ProgressStyleType = {
        htmlProgress : '40%',
        jsProgress : '80%',
        reactProgress : '70%',
    }

    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={'My skills'}/>
                <div className={s.skills}>
                    <Skill iconStyle = {css} progressStyle={progressStyle.htmlProgress} description={'Lorem Ipsum has not only successfully survived five centuries without noticeable changes. Lorem Ipsum has not only successfully survived five centuries without noticeable changes.'}
                           title={'HTML&CSS'}/>
                    <Skill iconStyle = {js}  progressStyle={progressStyle.jsProgress} description={'Many people think that Lorem Ipsum is a pseudo-Latin set taken from the ceiling. Many people think that Lorem Ipsum is a pseudo-Latin set taken from the ceiling.'}
                           title={'JS'}/>
                    <Skill iconStyle = {react}  progressStyle={progressStyle.reactProgress} description={'If you need Lorem Ipsum for a serious project, you probably don\'t want to. If you need Lorem Ipsum for a serious project, you probably don\'t want.'}
                           title={'React'}/>
                </div>
            </div>
        </div>
    );
};

