import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';


const Hero = props => (
    
    
        <header className={styles.component}>
           <h2 className={styles.title}>{props.titleText}</h2>
           <img className={styles.image} src={props.imgSrc}/>
        </header>
    
    );
    Hero.propTypes = {
        titleText: PropTypes.node.isRequired,
        imgSrc: PropTypes.string.isRequired,
      };

export default Hero;



//src="https://i.postimg.cc/rFjRP1TR/space.png"