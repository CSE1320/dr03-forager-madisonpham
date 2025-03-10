"use client";

import React, { useState, useEffect } from 'react';
import { CharacteristicTable, mushroomValues } from '../data/development';
import MushroomCard from './MushroomCard';

const ComparisonTable = () => {
    const [characteristics, setCharacteristics] = useState(
        CharacteristicTable.reduce((acc, item) => {
            acc[item.characteristic] = item.input || '';
            return acc;
        }, {})
    );

    // Load saved values from local storage when the component mounts
    useEffect(() => {
        const savedCharacteristics = JSON.parse(localStorage.getItem('characteristics'));
        if (savedCharacteristics) {
            setCharacteristics(savedCharacteristics);
        }
    }, []);

    // Save values to local storage whenever they change
    useEffect(() => {
        localStorage.setItem('characteristics', JSON.stringify(characteristics));
    }, [characteristics]);

    const handleInputChange = (event, characteristic) => {
        setCharacteristics({
            ...characteristics,
            [characteristic]: event.target.value,
        });
    };

    const handleClearInput = (characteristic) => {
        setCharacteristics({
            ...characteristics,
            [characteristic]: '',
        });
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        tableLayout: 'fixed', // Ensure columns are evenly distributed
    };

    const thTdStyle = {
        padding: '8px',
        textAlign: 'center', // Center the text
        width: '33.33%', // Set each column to take up one-third of the table width
        color: '#203B5F',
        fontSize: '16px',
    };

    const middleColumnStyle = {
        ...thTdStyle,
        borderLeft: '1px solid black',
        borderRight: '1px solid black',
    };

    const inputContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Center the content horizontally
    };

    const clearButtonStyle = {
        marginRight: '8px', // Adjusted margin to the right
        cursor: 'pointer',
        background: 'none', // Remove default button background
        border: 'none', // Remove default button border
        padding: '0', // Remove default button padding
        display: 'flex', // Align icon and text horizontally
        alignItems: 'center', // Center icon and text vertically
        justifyContent: 'center', // Center content horizontally
    };

    const iconContainerStyle = {
        display: 'grid', // Use grid to stack the icons
        alignItems: 'center', // Center icons vertically
        justifyContent: 'center', // Center icons horizontally
        width: '16px', // Set width of the container
        height: '16px', // Set height of the container
    };

    const iconStyle = {
        gridArea: '1 / 1', // Place both icons in the same grid area
        width: '100%', // Ensure icons take up the full width of the container
        height: '100%', // Ensure icons take up the full height of the container
    };

    const smallIconStyle = {
        gridArea: '1 / 1', // Place both icons in the same grid area
        width: '8px', // Set the width of the small icon
        height: '8px', // Set the height of the small icon
    };

    const inputStyle = {
        width: '100px', // Set the width of the input text box
        textAlign: 'center', // Center the text within the input field
        border: 'none', // Remove default border
        borderBottom: '1px solid black', // Add bottom border
    };

    const cardContainerStyle = {
        display: 'flex',
        justifyContent: 'space-around', // Space out the cards evenly
        marginBottom: '20px', // Add margin below the cards
    };

    const bigCardStyle = {
        width: '163px', // Width for big card
        height: '251px', // Height for big card
    };

    const bigImageStyle = {
        width: '100%', // Make the image cover the full width of the container
        height: '85%', // Make the image cover the full height of the container
        objectFit: 'cover', // Ensure the image covers the container without stretching
        marginTop: '30px', // Add more top margin to shift the image down
    };

    const deathCapImageStyle = {
        ...bigImageStyle,
        marginTop: '5px', // Shift the Death Cap image up by reducing the top margin
        marginBottom: '15px', // Add margin to the bottom to align with the other image
    };

    const bigTextStyle = {
        fontSize: '24px', // Larger font size for big card
        textAlign: 'center',
    };

    return (
        <div>
            <div style={cardContainerStyle}>
                <MushroomCard 
                    mushroom={mushroomValues[5]} 
                    style={bigCardStyle} 
                    imageStyle={bigImageStyle} 
                    textStyle={bigTextStyle}
                    isBigCard={true}
                />
                <MushroomCard 
                    mushroom={mushroomValues[0]} 
                    style={bigCardStyle} 
                    imageStyle={deathCapImageStyle} 
                    textStyle={bigTextStyle}
                    isBigCard={true}
                    showSkullIcon={true}
                />
            </div>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thTdStyle}>User Input</th>
                        <th style={middleColumnStyle}>Characteristic</th>
                        <th style={thTdStyle}>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {CharacteristicTable.map((item, index) => (
                        <tr key={index}>
                            <td style={thTdStyle}>
                                <div style={inputContainerStyle}>
                                    <button
                                        style={clearButtonStyle}
                                        onClick={() => handleClearInput(item.characteristic)}
                                    >
                                        <div style={iconContainerStyle}>
                                            <img src="/icons/circle.svg" alt="Circle for clear button" style={iconStyle} />
                                            <img src="/icons/comparison_x.svg" alt="X for clear button" style={smallIconStyle} />
                                        </div>
                                    </button>
                                    <input
                                        type="text"
                                        style={inputStyle} // Apply the input style
                                        placeholder={`Enter ${item.characteristic}`}
                                        value={characteristics[item.characteristic]}
                                        onChange={(event) => handleInputChange(event, item.characteristic)}
                                    />
                                </div>
                            </td>
                            <td style={middleColumnStyle}>{item.characteristic}</td>
                            <td style={thTdStyle}>{item.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ComparisonTable;