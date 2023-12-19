import React from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @param {string} dateof ref for the input
 * @returns {jsx|Component}
 */
const DateSelector = (props) => {
    const handleChange = (e) => {
        console.log(e)
        props.selectDate(e.target.value)
    }

    return (
        <input type="date" onChange={handleChange}/>
    )

};

DateSelector.propTypes ={
    selectDate: PropTypes.func
   }

export default DateSelector;