import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import Hamburger from '../Hamburger/Hamburger.js'
import {pageContents, listData} from '../../data/dataStore';

class App extends React.Component {
  render() {
    return (
        <main className={styles.component}>
          <Hamburger>
          <h1 className={styles.title}>{pageContents.title}</h1>
          <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
          <List {...listData} />
          </Hamburger>
        </main>
    )
  }
}

export default App;
