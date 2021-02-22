import {connect} from 'react-redux';
import Column from './Column';

export const getCardsForColumn = ({cards}, cardsId) => cards.filter(card => card.cardsId == cardsId);

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Column);