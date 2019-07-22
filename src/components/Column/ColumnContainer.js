import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForColumn,createAction_addCard} from './../../redux/cardsRedux';

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createAction_addCard({
    columnId: props.id,
    title,
  })),
});
const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
  
});

export default connect(mapStateToProps,mapDispatchToProps)(Column);