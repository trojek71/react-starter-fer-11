import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';


class List extends React.Component {
    static propTypes = {
      title: PropTypes.node,
      description: PropTypes.node,
      columns: PropTypes.array,
      image: PropTypes.string,
      colTitle1: PropTypes.node.isRequired,
      colTitle2: PropTypes.node.isRequired,
      colTitle3: PropTypes.node.isRequired,
    }
    state = {
      columns: this.props.columns || [],
    }
    static defaultProps = {
      description: settings.defaultListDescription,
    }
  render() {
    return (
   
        <section className={styles.title}>
         <Hero titleText={ReactHtmlParser(this.props.title)} imgSrc={ReactHtmlParser(this.props.image)} />
         
         <div className={styles.description}>
                {ReactHtmlParser(this.props.description)}
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



    