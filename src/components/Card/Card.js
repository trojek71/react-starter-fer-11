import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

class Card extends React.Component{
    


    render() {

    <section className={styles.component}>
       <h5 className={styles.title}>{ReactHtmlParser(props.title)}</h5> 
    </section>
      

Card.propTypes = {
    title: PropTypes.node.isRequired,
    
  };
}
}

export default Card;