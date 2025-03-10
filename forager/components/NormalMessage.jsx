import React from 'react';
import PropTypes from 'prop-types';

const NormalMessage = ({ text, style, onClick }) => {
    const messageStyle = {
        borderRadius: '10px', // Adjust the radius as needed
        padding: '3px', // Add padding for better appearance
        border: '1px solid #ccc', // Add border for better visibility
        fontFamily: 'Nunito',
        fontSize: '13px', // Adjust font size as needed
        backgroundColor: '#FF5050', // Add background color for better visibility
        color: 'white', // Set text color to white
        display: 'flex', // Use flexbox to align text and icon
        alignItems: 'center', // Align items vertically centered
        cursor: 'pointer', // Change cursor to pointer to indicate it's clickable
        ...style, // Merge custom styles
    };

    const arrowIconStyle = {
        width: '16px', // Adjust as needed
        height: '16px', // Adjust as needed
        marginLeft: '8px', // Add margin to the left of the arrow icon
    };

    return (
        <div className="normal-message" style={messageStyle} onClick={onClick}>
            {text}
            {text === "Report Error" && (
                <img src="/icons/right_arrow.svg" alt="Right arrow" style={arrowIconStyle} />
            )}
        </div>
    );
};

NormalMessage.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.object, // Add style prop type
    onClick: PropTypes.func, // Add onClick prop type
};

export default NormalMessage;