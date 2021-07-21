import React from 'react';
import loader from './img/loader.svg';

import styles from './UiLoading.module.css';

const UiLoading = () => {
    return (
        <>
            <img className={styles.loader} src={loader} alt="Loading..." />        
        </>
    );
};

export default UiLoading;