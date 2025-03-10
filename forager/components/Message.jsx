import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ icon, header, message, style, showCloseButton = true }) => {
    const closeButtonStyle = {
        cursor: 'pointer',
        width: '24px',
        height: '24px',
        marginLeft: 'auto', // Push the close button to the right
        filter: 'invert(1)', // Make the icon white
    };

    const defaultMessageStyle = {
        backgroundColor: '#FF5050',
        borderRadius: '25px',
        fontSize: '14px',
        fontWeight: '500',
        color: 'white',
        padding: '10px',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Align items to the start
        width: 'auto',
    };

    const headerStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        fontSize: '20px',
    };

    const iconStyle = {
        width: '20px',
        height: '20px',
        marginRight: '10px',
    };

    const descriptionStyle = {
        fontSize: '16px',
        marginTop: '8px', // Add margin to separate from the header
    };

    return (
        <div style={{ ...defaultMessageStyle, ...style }}>
            <div style={headerStyle}>
                {icon && <img style={iconStyle} src={icon} alt="Icon" />}
                <h1 className="uppercase flex-1">{header}</h1>
                {showCloseButton && (
                    <img style={closeButtonStyle} src="/icons/icon_x.png" alt="Close icon" />
                )}
            </div>
            <p className="" style={descriptionStyle} dangerouslySetInnerHTML={{ __html: message }}></p>
        </div>
    );
};

Message.propTypes = {
    icon: PropTypes.string,
    header: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    style: PropTypes.object,
    showCloseButton: PropTypes.bool,
};

export default Message;