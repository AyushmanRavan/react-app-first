import React,{ useRef } from 'react';
import Child from './Child';

function Parent(props) {
    const parentRef = useRef(null);

    const handleClick = () => {
        console.log(parentRef.current);
    };

    return (
        <div>
             <button onClick={handleClick}>Log DOM Node</button>
            <Child ref={parentRef}/>
        </div>
    );
}

export default Parent;