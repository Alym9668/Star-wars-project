import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames'

import icon from './img/close.svg'
import styles from './UiInput.module.css';

const UiInput = ({
    value,
    placeholder,
    handleInputChange,
    classes
}) => {
    return (
        <div className={cn(styles.wrapper, classes)}>
            <input 
            type="text"
            value={value}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={placeholder}
            className={styles.input}
            />
            <img 
            onClick={() => value &&  handleInputChange('')}
            src={icon}
            className={cn(styles.clear, !value && styles.clear__disabled)} 
            alt="X" />

        </div>
    );
};

UiInput.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    classes: PropTypes.string,
    handleInputChange: PropTypes.func
}

export default UiInput;