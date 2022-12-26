import React from 'react';
// import PropTypes from 'prop-types';
// Checkbox.propTypes = { };

function Checkbox({isChecked,label,index,checkHandler}) {
    return (
        <div>
           <input type="checkbox" id={`checkbox-${index}`}  checked={isChecked} onChange={checkHandler}      />
         <label htmlFor={`checkbox-${index}`}>{label}</label>
        </div>
    );
}

export default Checkbox;