import BookSubmission from "./components/BookSubmission";
import React, { useState, useEffect } from 'react';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Description from "./components/Description";
import TextField from '@mui/material/TextField';

function App() {
  const [locations, setLocations] = useState([""])
  return (
    <div style={{ flexDirection: 'column', display: 'flex' }}>
      <Navbar />
      <Hero />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20%', height: 750 }}>
          <div style={{ width: '50%', justifyContent: 'center', alignItems: 'center', display: 'flex', height: '100%' }}>
            <Description />
          </div>
          <div style={{ width: '50%', alignItems: 'center', justifyContent: 'center', display: 'flex', height: '100%', flexDirection: 'column', backgroundColor: '#A2D6F9', borderRadius: 90 }}>
            <text style={{ fontSize: 35, marginTop: '5%', letterSpacing: 3 }}>Get Started with your</text>
            <text style={{ fontSize: 35, letterSpacing: 3 }}>Personalized Destination</text>
            <TextField style ={{width: '70%', marginTop: '7%'}} id="standard-basic" label="Name" variant="standard" />
            <div style={{ width: '100%', marginTop: '12%', marginBottom: '6%' }}>
              <text style={{ fontSize: 28, letterSpacing: 1, marginLeft: '15%' }}>List all your recent reads</text>
            </div>
            <BookSubmission />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#FCF300', width: '100%', height: 450, marginTop: '-12%', marginBottom: '5%', borderRadius: 90, display: 'flex', justifyContent: 'center' }}>
        <div style={{ flexDirection: 'column', marginTop: '2%' }}>
          <text style={{ fontSize: 30, letterSpacing: 1.5 }}>Your Next Travel Destination is...</text>
          <div style={{ background: '#FFFFFF', height: '50%', borderRadius: 90, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5%', marginBottom: '15%' }}>
          <text style={{ fontSize: 60, letterSpacing: 10 }}>{localStorage.getItem('location')}</text>
          </div>
          <text style={{ fontSize: 20, marginTop: '5%' }}>Check out a Pinterest board to start planning your trip</text>
        </div>
      </div>
    </div>
  );
}

// <Hero />
export default App;
