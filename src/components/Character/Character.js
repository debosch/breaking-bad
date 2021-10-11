import React from 'react';

import './character.scss'

const Character = (props) => {
    return (
        <a className="character-card">
            <div className="character-card__image-wrapper">
                <img alt={ "Image of " + props.name } className="character-card__image" width="300" height="400" src="https://via.placeholder.com/300x400"></img>
            </div>
            <p className="character-card__character-name">{ props.name }</p>
        </a>
    );
};

export default Character;