import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer';
//import {listData} from '../../data/dataStore';
//import Creator from './../Creator/Creator.js';
import PropTypes from 'prop-types';
import Search from './../Search/SearchContainer';


class App extends React.Component {
  static propTypes = {
      
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    Search: PropTypes.node,
  }

    state = {
      lists: this.props.lists || [],
      
    }
    //static defaultProps = {
    //description: settings.defaultListDescription,
    //image: listData.image,
    //}
    addList(title){
      this.setState(state => (
        {
          lists: [
            ...state.lists,
            {
              key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 1,
              title,
              //image: listData.newListImage,
            },
          ],
        }
      ));
    }

    render() {
      const {title, subtitle,lists} = this.props;
      return (
   
        <main className={styles.component}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <Search >{Search}</Search> 
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
         
          {/*
          <List {...listData} /> 
          <div className={styles.creator}>
            <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
          
          </div>   
          <div className={styles.lists}>
            {this.state.lists.map(({key, ...listProps}) => (
              <List key={key} {...listProps} />
            ))}
          </div> 
            */}    
        </main>
      );
    }
}

export default App;
