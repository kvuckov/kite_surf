import React from 'react';
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
    return (
        <div className={style.advantages}>
            <Heading content={content} theme={'tertionary_opposite'}/>
            <div className={style.icon_boxes}>
                <div className={style.icon_boxes_box}>
                    <img src={weather} />
                    <p>Safest spot home to flat and shallow</p>
                </div>
                <div className={style.icon_boxes_box}>
                    <img src={wave} />
                    <p>Safest spot home to flat and shallow</p>
                </div>
                <div className={style.icon_boxes_box}>
                    <img src={board} />
                    <p>Safest spot home to flat and shallow</p>
                </div>
            </div>
        </div>
    );
};

export default Advantages;