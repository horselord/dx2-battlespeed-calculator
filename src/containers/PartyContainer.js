import { connect } from 'react-redux';
import { updateAgility, updateBonus, toggleSpeedster } from '../actions';
import Party from '../components/Party';

const mapStateToProps = state => ({
  demons: state.demons
});

const mapDispatchToProps = dispatch => ({
  updateAgility: (id, value) => dispatch(updateAgility(id, value)),
  updateBonus: (id, value) => dispatch(updateBonus(id, value)),
  toggleSpeedster: id => dispatch(toggleSpeedster(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Party);
