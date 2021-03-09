import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
import Search from '../Search/SearchContainer';

class Header extends React.Component {
  render(){
    const { icon } = settings;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Search />
            <Link className={styles.logo} to='/' onClick={this.handleClick} >
              <Icon name={icon} />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>Faq</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;