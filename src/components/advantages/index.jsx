import React from 'react';
import { useTranslation } from "react-i18next";
import weather from '../../assets/img/weather.png';
import wave from '../../assets/img/wave.png';
import board from '../../assets/img/boardIco.png';
import { convertToWebp } from '../../utils/convertToWebp';

import Heading from '../UI/heading';

import style from './styles.module.scss';

const Advantages = () => {
    const { t } = useTranslation();
    const advantages = t("about.advantages", { returnObjects: true });
    return (
        <div className={style.advantages}>
            <Heading content={advantages.title} theme={'tertionary_opposite'}/>
            <div className={style.icon_boxes}>
                <div className={style.icon_boxes_box}>
                    <img src={convertToWebp(weather)} alt='Weather' />
                    <p>{advantages.weather}</p>
                </div>
                <div className={style.icon_boxes_box}>
                    <img src={convertToWebp(wave)} alt='Wave'/>
                    <p>{advantages.wave}</p>
                </div>
                <div className={style.icon_boxes_box}>
                    <img src={convertToWebp(board)} alt='Board'/>
                    <p>{advantages.board}</p>
                </div>
            </div>
        </div>
    );
};

export default Advantages;