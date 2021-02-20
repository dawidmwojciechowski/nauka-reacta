import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hamburger.scss';

class Hamburger extends React.Component {

    propTypes = {
      children: PropTypes.node,
    }

    state = {
      contentActive: false,
    }

    handleClick = () => {
      this.setState({ contentActive: !this.state.contentActive});
    }
    
    render() {
      return (
        <div>
          <a onClick={this.handleClick} className={styles.icon + 'fas fa-bars'}></a>
          <div className={styles.content + ((this.state.contentActive) ? ' ' + styles.contentActive : '')}>
            {this.props.children}
          </div>
        </div>
      );
    }
}

export default Hamburger;