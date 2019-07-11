import React from 'react';
import styles from './Card.scss';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';




const  Card = ({title}) =>(
  
  

  <section className={styles.component}>
    <div className={title}>{ReactHtmlParser(title)}
    </div>    
  </section>
);      

Card.propTypes= {
  title: PropTypes.node.isRequired ,
};





export default Card;