import React from 'react';
import styles from './Card.scss';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';




const Card = props =>(
      
  

  <section className={styles.component}>
    <div className={styles.title}>{ReactHtmlParser(props.title)}
    </div>    
  </section>
);      

Card.propTypes= {
  title: PropTypes.node.isRequired ,
};





export default Card;