import React from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @param 
 * @returns {jsx|Component}
 */
const Selector = (props) => {
    const handleChange = (e) => {
        console.log(e)
        props.select(e.target.value)
    }

    return (
        <select onChange={handleChange} aria-label="selector">
        {props.options.map((option, index) => <option key={index} value={option.abbrevation}>{option.value}</option>)}
        </select>
    )

};

Selector.propTypes ={
    select: PropTypes.func,
    options: PropTypes.array
   }

export default Selector;