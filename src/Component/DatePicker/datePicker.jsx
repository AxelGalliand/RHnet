import React from 'react';
import PropTypes from 'prop-types'

/**
 * 
 * @param {string} dateof ref for the input
 * @returns {jsx|Component}
 */
const DateSelector = (props) => {

    return (
        <input type="date" ref={props.dateof}/>
    )

};

DateSelector.propTypes ={
    dateof: PropTypes.func
   }
export default DateSelector;