import 'components/Button/Button.css';
import PropTypes from 'prop-types';
import React from 'react';

function Button({ className, text }) {
    return (
        <button className={className}>
            {text}
        </button>
    )
}

Button.propTypes = {
    className : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired,
}

export default Button;
