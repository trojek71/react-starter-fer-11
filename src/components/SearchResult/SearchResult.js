import React from 'react';
import styles from './../Column/Column.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Card from  '../Card/Card.js';
import {settings} from '../../data/dataStore';
import Container from './../Container/Container';

import Icon from './../Icon/Icon';

class SearchResult extends React.Component{
    static propTypes = {
      title: PropTypes.node.isRequired,
      description: PropTypes.node,
      columns: PropTypes.array,
      cards:PropTypes.array,
      icon:PropTypes.node,
      name:PropTypes.node,
      
     
    }
    static defaultProps = {
        
      icon: settings.defaultColumnIcon,
   
    }

    componentDidMount(){
      console.log(this.props);
    }
    render(){
      const {title, icon,cards} = this.props; 
      return(
        <Container>   
          <section className={styles.component}>
            <div>
              <h3 className={title}>{ReactHtmlParser(title)}
                <span ><Icon name={ReactHtmlParser(icon)}></Icon></span>
              </h3>
            </div>
            
          
            
            <div className={styles.cards}>
              {cards.map(({key, ...cardId}) => (
                <Card key={key} {...cardId} />
              ))}
            </div>
           
          </section>
        </Container>
      );     
   
   
    }




}
export default SearchResult;