import React from 'react';
import styles from './../Column/Column.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Card from  '../Card/Card.js';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';




class SearchResults extends React.Component{
    static propTypes = {
      title: PropTypes.node,
      description: PropTypes.node,
      columns: PropTypes.array,
      cards:PropTypes.array,
      icon:PropTypes.node,
      name:PropTypes.node,
      lists:PropTypes.node,
      
     
    }
    static defaultProps = {
        
      icon: settings.defaultColumnIcon,
   
    }
    
    componentDidMount(){
      console.log(this.state.value);  
    }
    static defaultProps = {
    
      icon: settings.defaultColumnIcon,
 
    }
    addCard(title){
      this.setState(state => (
        {
          cards: [
            ...state.cards,
            {
              key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
              title,
 
            },
          ],
        }
      ));
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
export default SearchResults;