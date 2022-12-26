import React from 'react';
import { Link } from 'react-router-dom';

function States() {
    return (
        <div>
             <p>This is the States Page</p>
             <Link to="/state-pass" state={"Hello how are you"}> Pass state</Link>
        </div>
    );
}

export default States;