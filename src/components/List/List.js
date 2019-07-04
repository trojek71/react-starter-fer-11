import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';

class List extends React.Component {
    static propTypes = {
      title: PropTypes.node.isRequired,
      children: PropTypes.node.isRequired,
      imageSrc: PropTypes.string.isRequired,
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
        </section>
    )
  }
}

export default List;



//{props.titleText}