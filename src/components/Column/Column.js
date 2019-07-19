import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Card from  '../Card/Card.js';
import {settings} from '../../data/dataStore';
import Creator from './../Creator/Creator.js';
import Icon from './../Icon/Icon';





class Column extends React.Component{
   static propTypes = {
     title: PropTypes.node.isRequired,
     description: PropTypes.node,
     columns: PropTypes.array,
     cards:PropTypes.array,
     icon:PropTypes.node,
     name:PropTypes.node,
     addCard: PropTypes.func,
    
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


   componentDidMount(){
     console.log(this.props);
   }
   render(){
     const {title, icon,cards,addCard} = this.props; 
     return(
        
       <section className={styles.component}>
         <div>
           <h3 className={title}>{ReactHtmlParser(title)}
             <span ><Icon name={ReactHtmlParser(icon)}></Icon></span>
           </h3>
         </div>
         {/*
         <div className={styles.cards}>
           {cards.map(cardData => (
             <Card key={cardData.id} {...cardData} />
           ))}
         </div>
           */}
         <div className={styles.creator}>
           <Creator text={settings.cardsCreatorText} action={addCard} />
         </div>
         
         <div className={styles.cards}>
           {cards.map(({key, ...cardId}) => (
             <Card key={key} {...cardId} />
           ))}
         </div>
        
       </section>
     );     


   }
}

export default Column;