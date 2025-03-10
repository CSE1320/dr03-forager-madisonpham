import React from 'react';
import PropTypes from 'prop-types';
import MushroomCard from './MushroomCard';

const MushroomList = ({ mushrooms, cardStyle, imageStyle, style, showPercent }) => {
    const listStyle = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '40px', // Adjust gap between the cards
        ...style, // Merge additional styles
    };

    const cardTextStyle = {
        textAlign: 'center', // Center-align text for MushroomList
    };

    return (
        <div style={listStyle}>
            {mushrooms.map((mushroom, index) => (
                <MushroomCard
                    key={index}
                    mushroom={mushroom}
                    style={cardStyle}
                    imageStyle={imageStyle}
                    textStyle={cardTextStyle}
                    showPercent={showPercent}
                />
            ))}
        </div>
    );
};

MushroomList.propTypes = {
    mushrooms: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            toxic: PropTypes.bool,
            percent: PropTypes.string.isRequired,
            percentColor: PropTypes.string,
        })
    ).isRequired,
    cardStyle: PropTypes.object, // Add cardStyle prop type
    imageStyle: PropTypes.object, // Add imageStyle prop type
    style: PropTypes.object, // Add style prop type
    showPercent: PropTypes.bool, // Add showPercent prop type
};

MushroomList.defaultProps = {
    showPercent: true, // Default value for showPercent
};

export default MushroomList;