"use client";

import React, { useState } from 'react';
import Pill from './Pill';

const PillList = ({ pills }) => {
    const [selectedPills, setSelectedPills] = useState([]);

    const pillListStyle = {
        padding: '10px',
        paddingTop: '10px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
    };

    const handlePillClick = (pill) => {
        console.log(`Pill clicked: ${pill.pillText}`);
        setSelectedPills((prevSelectedPills) => {
            if (prevSelectedPills.includes(pill.pillText)) {
                return prevSelectedPills.filter((text) => text !== pill.pillText);
            } else {
                return [...prevSelectedPills, pill.pillText];
            }
        });
    };

    const getPillColor = (pillText) => {
        return selectedPills.includes(pillText) ? '#579076' : '#D9D9D9';
    };

    return (
        <div>
            <ul style={pillListStyle}>
                {pills.map((pill, index) => (
                    <li 
                        key={index}
                        >
                        <Pill
                            text={pill.pillText}
                            bgColor={getPillColor(pill.pillText)}
                            onClick={() => handlePillClick(pill)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PillList;
