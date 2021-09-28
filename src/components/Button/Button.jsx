import 'components/Button/Button.css';
import PropTypes from 'prop-types';
import React from 'react';

function Button({ className, text, action}) {
    return (
        <button className={className} onClick={action} >
            {text}
        </button>
    );
}

Button.propTypes = {
    className : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired,
    action: PropTypes.func,
}

export default Button;
