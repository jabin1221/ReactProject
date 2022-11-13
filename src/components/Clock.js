import { initializeApp } from 'firebase/app'
import React, {useEffect, useState} from 'react'

function Clock() {
    const [clockstate, setClockstate]  = useState();

    useEffect(() => {
      setInterval(() => {
        const date = new Date();
        setClockstate(date.toLocaleTimeString());
      }, 1000);
    }, []);
    
  return <div style={{fontSizee: "10px", margin: "15px"}}>{clockstate}</div>
  
}

export default Clock