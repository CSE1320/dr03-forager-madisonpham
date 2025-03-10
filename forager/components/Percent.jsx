import React from 'react';
import PropTypes from 'prop-types';

const Percent = ({ text, backgroundColor }) => {
    const percentStyle = {
        width: '31px',
        height: '27px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgroundColor,
        borderRadius: '7px',
    };

    const textStyle = { 
        fontSize: '12px',
        fontWeight: '800',
        color: '#FFFFFF',
        textAlign: 'center',
        fontStyle: 'normal',
        fontFamily: 'Nunito',
        whiteSpace: 'nowrap',
    };

    return (
        <div style={percentStyle}>
            <span style={textStyle}>{text}</span>
        </div>
    );
};

Percent.propTypes = {
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string, // Make backgroundColor optional
};

export default Percent;