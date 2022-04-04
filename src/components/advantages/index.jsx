import React from 'react';
import { useTranslation } from "react-i18next";
import weather from '../../assets/img/weather.png';
import wave from '../../assets/img/wave.png';
import board from '../../assets/img/boardIco.png';
import { convertToWebp, get } from '../../utils/convertToWebp';

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
                    <img src={weather} alt='Weather' width={get(weather, 'width')} height={get(weather, 'height')}/>
                    <p>{advantages.weather}</p>
                </div>
                <div className={style.icon_boxes_box}>
                    <img src={wave} alt='Wave' width={get(wave, 'width')} height={get(wave, 'height')}/>
                    <p>{advantages.wave}</p>
                </div>
                <div className={style.icon_boxes_box}>
                    <img src={board} alt='Board' width={get(board, 'width')} height={get(board, 'height')}/>
                    <p>{advantages.board}</p>
                </div>
            </div>
        </div>
    );
};

export default Advantages;