import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {
    static propTypes = {
      title: PropTypes.node.isRequired,
      children: PropTypes.node.isRequired,
      imageSrc: PropTypes.string.isRequired,
      colTitle1: PropTypes.node.isRequired,
      colTitle2: PropTypes.node.isRequired,
      colTitle3: PropTypes.node.isRequired,
    }
    static defaultProps = {
      children: <p>I can do all the things!!!</p>,
    }
  render() {
    return (
   
        <section className={styles.subtitle}>
         <Hero titleText={this.props.title} imgSrc={this.props.imageSrc} />
         
         <div className={styles.description}>
                {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column titleText={this.props.colTitle1}></Column>
          <Column titleText={this.props.colTitle2}></Column>
          <Column titleText={this.props.colTitle3}></Column>
        </div>
        
        </section>
    )
  }
}

export default List;



