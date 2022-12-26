import React, { useRef } from 'react';
import ChildComponent from './ChildComponent'

function ParentComponent(props) {
    const childRef = useRef(null);

    function handleOpenModal(value){
        // childRef.current
    }


    return (
        <div>
            <p>This is a parent component</p>
            <ChildComponent ref={childRef}/>
            <button onClick={() => handleOpenModal(true)}>Open modal</button>
        </div>
    );
}

export default ParentComponent;