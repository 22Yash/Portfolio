import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    // Fetch the number of visitors from your server or API
    // For demonstration purposes, I'll just simulate the data
    const fetchVisitorCount = async () => {
      // Simulate fetching data from an API
      const response = await fetch('https://api.example.com/visitors');
      const data = await response.json();
      setVisitors(data.visitorCount);
    };

    // Call the fetch function
    fetchVisitorCount();
  }, []); // Empty dependency array ensures useEffect only runs once on component mount

  return (
    <div>
      <h2>Number of Visitors:</h2>
      <p>{visitors}</p>
    </div>
  );
};

export default VisitorCounter;
