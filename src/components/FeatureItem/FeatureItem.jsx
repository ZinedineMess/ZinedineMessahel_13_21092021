import 'components/FeatureItem/FeatureItem.css';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

function FeatureItem({imgSrc, imgAlt, title, description}) {
    return (
        <Fragment>
            <article className="featureItem">
                <img src={imgSrc} className="featureIcon" alt={imgAlt}/>
                <h3 className="featureItemTitle">{title}</h3>
                <p>{description}</p>
            </article>
        </Fragment>
    )
}

FeatureItem.propTypes = {
    imgSrc : PropTypes.string.isRequired,
    imgAlt : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
}

export default FeatureItem;
