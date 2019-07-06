import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Card from  '../Card/Card.js'
import {pageContents, listData,settings} from '../../data/dataStore';
import Creator from './../Creator/Creator.js';




class Column extends React.Component{
   static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    cards:PropTypes.array,
   }

   state = {
    cards: this.props.cards || [],
  }
   static defaultProps = {
    description: settings.cardCreatorText,
  }
  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
            
          }
        ]
      }
    ));
  }


render(){
return(
  
   
        

    <section className={styles.component}>
       <div className={styles.creator}>
          <Creator text={settings.cardsCreatorText} action={title => this.addCard(title)}/>
        </div>
       <div className={styles.cards}>
            {this.state.cards.map(({key, ...cardsProps}) => (
            <Card key={key} {...cardsProps} />
               ))}
        </div>
    </section>
)     


}
}

export default Column;