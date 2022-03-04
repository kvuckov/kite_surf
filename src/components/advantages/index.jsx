import React from 'react';
import { useTranslation } from "react-i18next";
import weather from '../../assets/img/weather.png';
import wave from '../../assets/img/wave.png';
import board from '../../assets/img/boardIco.png';

import Heading from '../UI/heading';

import style from './styles.module.scss';

const content = {
    first: "Advantages",
    second: "Why Learn How To Kitesur With Us?",
    third: "We want our clients to feel awesome and unique."
}

const Advantages = () => {
    const { t } = useTranslation();
    const advantages = t("about.advantages", { returnObjects: true });
    return (
        <div className={style.advantages}>
            <Heading content={advantages.title} theme={'tertionary_opposite'}/>
            <div className={style.icon_boxes}>
                <div className={style.icon_boxes_box}>
                    <img src={weather} />
                    <p>{advantages.weather}</p>
                </div>
                <div className={style.icon_boxes_box}>
                    <img src={wave} />
                    <p>{advantages.wave}</p>
                </div>
                <div className={style.icon_boxes_box}>
                    <img src={board} />
                    <p>{advantages.board}</p>
                </div>
            </div>
        </div>
    );
};

export default Advantages;