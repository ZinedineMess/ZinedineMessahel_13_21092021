import 'components/FeatureItem/FeatureItem.css';
import PropTypes from 'prop-types';
import React from 'react';

const FeatureItem = ({imgSrc, imgAlt, title, description}) => {
    return (
        <article className='featureItem'>
            <img src={imgSrc} className='featureIcon' alt={imgAlt}/>
            <h3 className='featureItemTitle'>{title}</h3>
            <p>{description}</p>
        </article>
    );
}

FeatureItem.propTypes = {
    imgSrc : PropTypes.string.isRequired,
    imgAlt : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
}

export default FeatureItem;
