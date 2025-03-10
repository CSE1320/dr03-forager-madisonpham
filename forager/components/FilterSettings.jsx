import React from 'react';
import { pillValues } from '../data/development';
import PillList from './PillList';

const FilterSettings = ({ onClose, selectedPills, onPillClick }) => {
  const containerStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '30px',
    paddingTop: '22px',
    backgroundColor: '#F2F2F2',
    width: '100%',
    height: '100%',
    borderRadius: '20px',
    fontFamily: 'Nunito',
  };

  const headerContainerStyle = {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '30px',
  };

  const headerStyle = {
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '700',
    flex: '1',
  };

  const subHeaderStyle = {
    color: 'black',
    fontSize: '24px',
    fontWeight: '700',
    paddingTop: '25px',
  };

  const closeButtonStyle = {
    cursor: 'pointer',
    width: '24px',
    height: '24px',
    background: 'none',
    border: 'none',
  };

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    width: '90%', // Set the width to 90% of the viewport width
    height: '90%', // Set the height to 90% of the viewport height
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
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

  return (
    <>
      <div style={overlayStyle} onClick={onClose}></div>
      <div style={modalStyle}>
        <div style={containerStyle}>
          <div style={headerContainerStyle}>
            <h1 style={headerStyle}>FILTER</h1>
            <button style={closeButtonStyle} onClick={onClose}>
              <img src="/icons/icon_x.png" alt="A X icon to close the filter settings" />
            </button>
          </div>
          <h2 style={subHeaderStyle}>Tags</h2>
          <PillList
            pills={pillValues.filter((pill) => pill.pillType === 'Tags')}
            selectedPills={selectedPills}
            onPillClick={onPillClick}
          />
          <h2 style={subHeaderStyle}>Regions</h2>
          <PillList
            pills={pillValues.filter((pill) => pill.pillType === 'Regions')}
            selectedPills={selectedPills}
            onPillClick={onPillClick}
          />
          <h2 style={subHeaderStyle}>Category</h2>
          <PillList
            pills={pillValues.filter((pill) => pill.pillType === 'Category')}
            selectedPills={selectedPills}
            onPillClick={onPillClick}
          />
        </div>
      </div>
    </>
  );
};

export default FilterSettings;