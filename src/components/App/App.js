import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents, listData, settings} from '../../data/dataStore';
import Creator from './../Creator/Creator.js';
import PropTypes from 'prop-types';
import Hero from './../Hero/Hero';


class App extends React.Component {
  static propTypes = {
      
      title: PropTypes.node,
      
      
   
  }

    state = {
      lists: this.props.lists || [],
      
    }
    static defaultProps = {
      description: settings.defaultListDescription,
      image: listData.image,
    }
    addList(title){
      this.setState(state => (
        {
          lists: [
            ...state.lists,
            {
              key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 1,
              title,
              
            }
          ]
        }
      ));
    }

  render() {
    return (
   
        <main className={styles.component}>
          <h1 className={styles.title}>{pageContents.title}</h1>
          <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
          
          <List {...listData} /> 
          <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
          
        </div>   
        <div className={styles.lists}>
            {this.state.lists.map(({key, ...listProps}) => (
            <List key={key} {...listProps} />
               ))}
        </div>     
        </main>
    )
  }
}

export default App;
