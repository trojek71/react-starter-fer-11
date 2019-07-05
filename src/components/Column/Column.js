import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Card from  '../Card/Card.js'







  const Column = props =>(
        

    <section className={styles.component}>
       <h3 className={styles.title}>{ReactHtmlParser(props.title)}</h3> 
       <Card className={styles.title}>{ReactHtmlParser(props.title)}</Card>
    </section>
);      
   
    
   

Column.propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    cards:PropTypes.array,
  };


  
export default Column;