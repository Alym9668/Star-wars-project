import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import { useTheme, THEME_LIGHT, THEME_DARK,THEME_NEITRAL  } from '../../../context/ThemeProvider';
import imgLightSide from './img/light-side.jpg';
import imgDarkSide from './img/dark-side.jpg';
import imgFalcon from './img/falcon.jpg'

import styles from './ChooseSide.module.css'

const ChooseSideItem = ({
  text,
  img,
  theme,
  clases
}) => {
  const isTheme = useTheme();

  return(
    <div 
      className={cn(styles.item, clases)}
      onClick={() => isTheme.change(theme)}
     >
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt={text} />
    </div>

  )

}


ChooseSideItem.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  img: PropTypes.string

}

const ChooseSide = () => {
   
    return (
        <div className={styles.container}>

         <ChooseSideItem
            clases={styles.item__light}
            theme={THEME_LIGHT}
            text="Light Side"
            img={imgLightSide}
         />

          <ChooseSideItem
            clases={styles.item__dark}
            theme={THEME_DARK}
            text="Dark Side"
            img={imgDarkSide}
         />

          <ChooseSideItem
            clases={styles.item__neitral}
            theme={THEME_NEITRAL}
            text="I'm Han Solo"
            img={imgFalcon}
         />
              
        </div>
    );
};

export default ChooseSide;