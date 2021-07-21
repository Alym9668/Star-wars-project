import React from 'react';
import cn from 'classnames'
import PropTypes from 'prop-types'

import styles from './UiVideo.module.css';

const UiVideo = ({
    src,
    classes,
    playbackRate=1.0
}) => {
    return (
        <video 
            loop
            autoPlay
            muted
            className={ cn(styles.video, classes) }
            playbackRate={playbackRate}
         >
            <source src={src}/>
        </video>
    );
};

UiVideo.propTypes = {
    src: PropTypes.string,
    classes: PropTypes.string,
    playbackRat: PropTypes.number
}

export default UiVideo;