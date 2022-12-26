import React from 'react';
import { useLocation } from 'react-router-dom';


function StatesPass() {
    let location = useLocation()
    return (
        <div>
             <p>This is the StatesPass Page</p>
             {location.state && <p>Received data from State.</p>}
        </div>
    );
}

export default StatesPass;