'use client';
import React, { useState, useEffect } from 'react';
import './Stat.css';
import { FaUsers, FaUniversity, FaGlobe, FaChild } from 'react-icons/fa';

const InternationalNetwork = () => {
  const [data, setData] = useState(null);

  const fetchAPI = async () => {
    try {
      const response = await fetch("https://nj.dekhub.com/getNum");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result); // Assuming the response is a JSON object or value you want to display
    } catch (error) {
      console.error('Error fetching data:', error);
      setData(null); // Optionally, you could set an error state here for user feedback
    }
  };

  useEffect(() => {
    fetchAPI(); // Call fetchAPI when the component mounts
  }, []); // Empty dependency array to run only once

  // You can optionally add a loading state here to show a loading spinner until the data is fetched

  return (
    <div className="stat">
      <div className="stat-item">
        <FaUsers className="icon" />
        <h1>{data ?? 'Loading...'}</h1> {/* Show 'Loading...' while data is null */}
        <p>ผู้เรียน</p>
      </div>
      <div className="stat-item">
        <FaUniversity className="icon" />
        <h1>{data ?? 'Loading...'}</h1>
        <p>lorem</p>
      </div>
      <div className="stat-item">
        <FaGlobe className="icon" />
        <h1>{data ?? 'Loading...'}</h1>
        <p>lorem</p>
      </div>
      <div className="stat-item">
        <FaChild className="icon" />
        <h1>{data ?? 'Loading...'}</h1>
        <p>lorem</p>
      </div>
    </div>
  );
};

export default InternationalNetwork;
