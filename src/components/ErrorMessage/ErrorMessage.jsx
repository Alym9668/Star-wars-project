import React from 'react';
import styles from '../ErrorMessage/ErrorMessage.module.css'
import UiVideo from '../UI/UiVideo';
import video from './video/han-solo.mp4'

const ErrorMessage = () => {
    return (
        <>
            <p className={styles.text}>            
                The dark side of the force has won.<br />
                We cannot display data.<br />
                Come back when we fix everything
            </p>

            <UiVideo src={video} classes={styles.video} />  
        </>
    );
};

export default ErrorMessage;