import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';

class List extends React.Component {
  render() {
    return (
   
        <section className={styles.subtitle}>
         <Hero />
        </section>
    )
  }
}

export default List;