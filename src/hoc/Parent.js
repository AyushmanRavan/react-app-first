import React from 'react';
import Child from './Child';

function Parent({count, decrementCount, incrementCount}) {
    return (
        <div>
            <h2>value: {count}</h2>
            <button onClick={incrementCount}>increment</button>;
            <button onClick={decrementCount}>decrement</button>;
        </div>
    );
}

export default Child(Parent);