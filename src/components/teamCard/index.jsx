import React from 'react'
import style from './styles.module.scss';

import { convertToWebp, get } from '../../utils/convertToWebp';

const TeamCard = props => {
    const [showDescription, setShowDescription] = React.useState(false);

    return(
        <div className={style.about_team_member}>
            <img src={convertToWebp(props.data.image)} alt={`${props.data.role} - ${props.data.name}`} width={get(props.data.image, 'width')} height={get(props.data.image, 'height')}/>
            <h5>{props.data.name}</h5>
            <p>{props.data.role}</p>
            <div className={style.about_team_member_description}>
                {props.data.desctiptionLess}{!showDescription && '...'}{!showDescription && <p onClick={() => setShowDescription(!showDescription)}>Show more</p>}
                {showDescription && <>{props.data.descriptionMore}<p onClick={() => setShowDescription(!showDescription)}>Show less</p></>}
            </div>
        </div>
    );
}

export default TeamCard