import React from 'react';
import PropTypes from 'prop-types';

const Pill = ({ text, bgColor, onClick }) => {
    const pillStyle = {
        backgroundColor: bgColor,
        color: bgColor === '#579076' ? '#FFFFFF' : '#7C7C7C',
        padding: '0px 17px',
        borderRadius: '100px',
        display: 'inline-block',
        fontSize: '16px',
        fontWeight: '400',
        cursor: 'pointer',
    };

    const textStyle = {
        fontFamily: 'Nunito',
        fontSize: '16px',
        fontWeight: '400',
    }

    return (
        <div style={pillStyle} onClick={onClick}>
            <span style={textStyle}>{text}</span>
        </div>
    );
};

Pill.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default Pill;
