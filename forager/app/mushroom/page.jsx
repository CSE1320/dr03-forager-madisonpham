"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import { mushroomValues, warningMessage, fastFacts } from '../../data/development';
import MushroomList from '@/components/MushroomList';
import TopBar from '@/components/TopBar';
import Message from '@/components/Message';
import MushroomCard from '@/components/MushroomCard';
import NormalMessage from '@/components/NormalMessage';

export default function MushroomPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleReportErrorClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = () => {
    // Handle the user input submission here
    console.log('User input:', userInput);
    setShowPopup(false);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000); // Hide the confirmation message after 3 seconds
  };

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: '120px',
    backgroundColor: '#F2F2F2', // Change background color to #F2F2F2
  };

  const contentStyle = {
    flex: '1', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '60px', 
    backgroundColor: '#F2F2F2', // Ensure content area has the same background color
  };

  const listStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '40px', // Reduced gap between the cards
  };

  const headerStyle = {
    textAlign: 'center',
    fontSize: '24px',
    marginTop: '20px', 
  };

  const slicedMushroomValues = mushroomValues.slice(1, 5);
  const mushroomDeathCap = mushroomValues[0];

  const messageStyle = {
    fontSize: '16px', // Set font size for the message
    padding: '8px', 
    margin: '10px auto', 
    width: '290px', // Set the same width as the big MushroomCard
  };

  const fastFactsStyle = {
    ...messageStyle,
    backgroundColor: '#8E4A49', // Set background color for fast facts
  };

  const customImageStyle = {
    width: '267px',
    height: '250px',
  };

  const customTextStyle = {
    fontSize: '30px',
    textAlign: 'left', // Align text to the left for big MushroomCard
    width: '100%', // Take full width of the container
    paddingLeft: '8px', // Add padding to align with the card
    display: 'flex', // Use flexbox to align text and icon
    alignItems: 'center', // Align items vertically centered
  };

  const listImageStyle = {
    width: '100px',
    height: '100px', // Adjusted height for the image
  }

  const listCardStyle = {
    width: '101px', 
    height: '130px', // Adjusted height for the card
  };

  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px', // Space between button and icon
    color: '#888787',
    fontSize: '14px',
    fontWeight: '400',
    width: 'auto', // Ensure it only takes needed space
    marginLeft: '200px', // Moves it slightly to the right
  };

  const paragraphStyle = {
    paddingLeft: '20px', // Add padding to the left
    paddingRight: '20px', // Add padding to the right
    width: '290px', // Set the same width as the big MushroomCard
    margin: '10px auto', // Center the paragraph
    textAlign: 'center', // Center the text
  };

  const plusIconStyle = {
    width: '24px', // Adjust as needed
    height: '24px', // Adjust as needed
    marginLeft: '8px', // Add margin to the left of the plus icon
  };

  const topBarStyle = {
    marginBottom: '20px', // Add margin below the TopBar
  };

  const navBarContainerStyle = {
    marginTop: '20px', // Add margin above the NavBar
  };

  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '40px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    width: '400px', // Adjust the width as needed
    height: '400px', // Adjust the height as needed
    textAlign: 'center', // Center the text in the popup
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  };

  const closeIconStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '24px',
    height: '24px',
    cursor: 'pointer',
  };

  const submitButtonStyle = {
    borderRadius: '20px', // Add border radius to the submit button
    padding: '8px 16px', // Add padding to the submit button
    backgroundColor: '#579076', // Set the background color for the submit button
    color: 'white', // Set the text color for the submit button
    paddingTop: '10px', // Add padding to the top of the submit button
    marginTop: '20px', // Add margin to the top of the submit button
  };

  const confirmationStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#579076',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '15px',
    zIndex: 1001,
  };

  return (
    <div className="page" style={pageStyle}>
      <div style={topBarStyle}>
        <TopBar text="Mushroom Page" backLink="/dashboard" />
      </div>
      <div style={contentStyle}>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '12px' }}>
          <h1 style={{ marginRight: '50px', fontSize: '13px', color: '#314053' }}>Not what you expected?</h1>
          <NormalMessage text="Report Error" onClick={handleReportErrorClick} />
        </div>
        <Message 
          icon={warningMessage.icon} 
          header={warningMessage.header} 
          message={warningMessage.message} 
          style={messageStyle} 
          showCloseButton={false} 
        />
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Link href="/comparison">
            <div style={buttonContainerStyle}>
              <button>Compare</button>
              <img src="/icons/compare_arrow.svg" alt="Right arrow for compare" />
            </div>
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <MushroomCard 
            mushroom={mushroomDeathCap} 
            imageStyle={customImageStyle} 
            textStyle={customTextStyle}
            extraText="Amanita phalloides"
            isBigCard={true}
            showSkullIcon={true}
          />
        </div>
        <Message 
          header={fastFacts.header} 
          message={fastFacts.message} 
          style={fastFactsStyle} 
          showCloseButton={false} 
        />
        <p style={paragraphStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
        </p>
        <p style={headerStyle}>Similar Matches</p>
        <MushroomList 
            mushrooms={slicedMushroomValues} 
            cardStyle={listCardStyle} 
            imageStyle={listImageStyle} 
            style={listStyle}
            showPercent={true}
        />
      </div>
      <div style={navBarContainerStyle}>
        <NavBar />
      </div>
      {showPopup && (
        <>
          <div style={overlayStyle} onClick={handleClosePopup}></div>
          <div style={popupStyle}>
            <img src="/icons/icon_x.png" alt="Close" style={closeIconStyle} onClick={handleClosePopup} />
            <h2>Warning</h2>
            <p>There was an error reported.</p>
            <input 
              type="text" 
              value={userInput} 
              onChange={handleInputChange} 
              placeholder="Describe the error" 
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            />
            <button onClick={handleSubmit} style={submitButtonStyle}>Submit</button>
          </div>
        </>
      )}
      {showConfirmation && (
        <div style={confirmationStyle}>
          Error submitted
        </div>
      )}
    </div>
  );
}