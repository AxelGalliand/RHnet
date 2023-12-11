import React from 'react';
import PropTypes from 'prop-types'

/**
 * 
 * @param {string} dateId id for the input 
 * @param {string} dateOf ref for the input
 * @returns {jsx|Component}
 */
const dateSelector = (props) => {

    return (
        <input type="date" id={props.dateId} ref={props.dateOf}/>
    )

};

dateSelector.propTypes ={
    dateOf: PropTypes.string,
    dateId: PropTypes.string
   }
export default dateSelector;