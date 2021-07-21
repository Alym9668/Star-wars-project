import React from 'react';
import { useLocation } from 'react-router';
import img from './img/notfound.png'
import styles from '../NotFoundPage/NotFoundPage.module.css'

const NotFoundPage = () => {
    let location = useLocation()

    return (
        <>
          <img className={styles.img} src={img} alt="NOT FOUND"/>  
          <p className={styles.text} >No match for <u>{location.pathname}</u></p>
        </>
    );
};

export default NotFoundPage;