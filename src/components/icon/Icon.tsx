import React from 'react';
import iconSprite from '../../assets/images/icons-sprite.svg';

export const Icon = () => {
    return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${iconSprite}#${props.iconId}` } />
        </svg>
    );
};
