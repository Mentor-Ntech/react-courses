import React from 'react'
import { useState, useEffect } from 'react';

const EventListenerComponent = () => {

    const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      setClicks(clicks + 1);
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [clicks]);
  return (
    <div>
      <p>Number of clicks: {clicks}</p>
    </div>
  )
}

export default EventListenerComponent;



