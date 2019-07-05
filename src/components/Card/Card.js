import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';




const Card = props =>(
      
  

    <section className={styles.component}>
       <div className={styles.title}>{ReactHtmlParser(props.title)}</div> 
     
    </section>
);      

Card.propTypes = {
    title: PropTypes.node,
    
  };




export default Card;