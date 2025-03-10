import React from 'react';
import Link from 'next/link';

const TopBar = ({ text, backLink }) => {
  const topBarStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: '#579076',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 20px',
    zIndex: 1000,
    height: 'auto',
    borderRadius: '0px 0px 20px 20px',
  };

  const statusBarStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const contentStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
  };

  const backArrowContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginRight: 'auto', // Align to the left
  };

  const backArrowStyle = {
    width: '25px',
    height: '50px',
  };

  const textStyle = {
    color: 'white',
    fontSize: '32px',
    fontWeight: '700',
    fontFamily: 'Nunito',
    flex: 1, // Allow the text to take up available space
    textAlign: 'center', // Center the text
  };

  return (
    <div style={topBarStyle}>
      <div style={statusBarStyle}>
        <img src="/icons/status_bar.png" alt="IPhone status bar" />
      </div>
      <div style={contentStyle}>
        <div style={backArrowContainerStyle}>
          {backLink && (
            <Link href={backLink} legacyBehavior>
              <a>
                <img src="/icons/back.svg" alt="Back arrow" style={backArrowStyle} />
              </a>
            </Link>
          )}
        </div>
        <span style={textStyle}>{text}</span>
      </div>
    </div>
  );
};

export default TopBar;