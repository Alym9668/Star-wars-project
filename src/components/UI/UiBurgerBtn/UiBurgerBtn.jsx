import React from 'react';
import styles from './UiBurgerBtn.module.css';

const UiBurgerBtn = () => {
    return (
        <>
        <div id={styles.menuToggle}>
            <input type="checkbox" />
            <span id={styles.span1}></span>
            <span id={styles.span2}></span>
            <span id={styles.span3}></span>
        </div>

        </>
    );
};

export default UiBurgerBtn;