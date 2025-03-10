"use client";
import React, { useState, useRef } from 'react';
import Link from 'next/link';

const CameraTopBar = () => {

    const backgroundScreenStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: 'Nunito',
        position: 'relative',
    };

    const topBarStyle = {
        width: '40px',
        height: '40px',
        cursor: 'pointer',
        zIndex: 3,
    };

    return (
        <div style={backgroundScreenStyle}>
            <Link href="/dashboard" passHref>
                <img src="/icons/back.svg" alt="Back navigation" style={topBarStyle} />
            </Link>
            <img src="/icons/flash.svg" alt="Flash button" style={topBarStyle} />
        </div>
    );
};

export default CameraTopBar;