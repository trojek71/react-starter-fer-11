import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList,createAction_addColumn} from './../../redux/columnsRedux';

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createAction_addColumn({
    listId: props.id,
    title,
  })),
});
const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);