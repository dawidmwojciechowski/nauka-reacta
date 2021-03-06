import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import {Draggable} from 'react-beautiful-dnd';

class Card extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    id: PropTypes.string,
    index: PropTypes.number,
    draggable: PropTypes.bool,
  }

  static defaultProps = {
    draggable: true,
  }

  
  render() {

    const {title, id, index, draggable} = this.props;

    if (draggable){
      return (
        <Draggable draggableId={id} index={index}>
          {(provided) => (
            <article
              className={styles.component}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              {title}
            </article>
          )}
        </Draggable>
      );
    }
    else {
      return (
        <div className={styles.component}>
          {title}
        </div>
      );
    }
  }
}

export default Card;