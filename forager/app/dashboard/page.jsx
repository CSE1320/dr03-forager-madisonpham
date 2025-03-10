"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import { mushroomValues, pillValues } from '../../data/development'; 
import MushroomList from '@/components/MushroomList';
import Search from '@/components/Search';
import PillList from '@/components/PillList';

export default function DashboardPage() {
  const [selectedPills, setSelectedPills] = useState([]);

  const slicedMushroomValues = mushroomValues.slice(0, 5);
  const selectedPillIndices = [0, 2];
  const slicedPillValues = pillValues.filter((_, index) => selectedPillIndices.includes(index));

  const handlePillClick = (pill) => {
    setSelectedPills((prevSelectedPills) => {
      if (prevSelectedPills.includes(pill)) {
        return prevSelectedPills.filter((p) => p !== pill);
      } else {
        return [...prevSelectedPills, pill];
      }
    });
  };

  const dashboardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#397367',
    minHeight: '100vh',
    fontFamily: 'Nunito',
  };

  const rectangleStyle = {
    width: '100%', 
    flex: 1, 
    backgroundColor: '#F2F2F2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', 
    alignItems: 'center',
    borderRadius: '41px 41px 0px 0px', 
    marginTop: '5%', 
    paddingTop: '30px', 
    paddingLeft: '20px',
  };

  const textContainerStyle = {
    width: '100%', 
    paddingLeft: '20px',
    textAlign: 'left',
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'flex-start', 
  };

  const hiChantelleContainerStyle = {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    marginTop: '20px', 
  };

  const hiStyle = {
    color: 'white',
    fontSize: '24px',
    fontWeight: '500',
  };

  const chantelleStyle = {
    color: 'white',
    fontSize: '45px',
    fontWeight: '800',
  };

  const circleStyle = {
    width: '41px',
    height: '41px',
    borderRadius: '50%',
    backgroundColor: '#5F464B',
    marginLeft: '30%', 
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold', 
  };
  
  const mushroomListStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '10px',
    flexWrap: 'wrap',
    width: '100%',
  };

  const pillListContainerStyle = {
    width: '100%', // Ensure the container takes full width
    paddingLeft: '20px',
    display: 'flex',
    justifyContent: 'flex-start', // Align items to the start
  };

  const mushroomCardStyle = {
    width: '101px', 
    height: '130px', // Adjusted height for the card
  };

  const customImageStyle = {
    width: '100px',
    height: '100px', // Adjusted height for the image
  };

  return (
    <div className="page" style={dashboardStyle}>
      <img src="/icons/status_bar.png" alt="IPhone status bar" />
      <div style={textContainerStyle}>
        <div style={hiChantelleContainerStyle}>
          <h1 style={hiStyle}>Hi,</h1>
          <h2 style={chantelleStyle}>Chantelle.</h2>
        </div>
        <div style={circleStyle}>
          <span>C</span>
        </div>
      </div>
      <div style={rectangleStyle}>
        <Search />
        <div style={pillListContainerStyle}>
          <PillList pills={slicedPillValues} selectedPills={selectedPills} onPillClick={handlePillClick} />
        </div>
        <Link href="/mushroom" legacyBehavior>
          <a>
            <MushroomList 
              mushrooms={slicedMushroomValues} 
              style={mushroomListStyle} 
              cardStyle={mushroomCardStyle} 
              imageStyle={customImageStyle} 
              showPercent={false} // Hide percent in the dashboard
            />
          </a>
        </Link>
      </div>
      <NavBar />
    </div>
  );
}