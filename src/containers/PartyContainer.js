import { connect } from 'react-redux';
import { updateAgility, updateBonus, toggleSpeedster, selectCompendiumDemon } from '../actions';
import Party from '../components/Party';
import compendium from '../data/stats.json';

const mapStateToProps = (state, ownProps) => ({
  demons: state.demons,
  demonOptions: compendium.map(c => ({...c, text: c.race + ' '  + c.name, value: c.name, key: c.name })),
});

const mapDispatchToProps = dispatch => ({
  updateAgility: (id, value) => dispatch(updateAgility(id, value)),
  updateBonus: (id, value) => dispatch(updateBonus(id, value)),
  toggleSpeedster: id => dispatch(toggleSpeedster(id)),
  onSelectChange: (id, cDemon) => dispatch(selectCompendiumDemon(id,cDemon))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Party);
