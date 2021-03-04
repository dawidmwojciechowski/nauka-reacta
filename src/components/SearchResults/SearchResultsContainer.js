import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearchResults} from '../../redux/cardsRedux';
import { getColumnsForList } from '../../redux/columnsRedux';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.id;

  return {
    cards: getCardsForSearchResults(state, searchString),
    columns: getColumnsForList(state, searchString ),
    lists: state.lists,
  };
};

export default connect(mapStateToProps)(SearchResults);