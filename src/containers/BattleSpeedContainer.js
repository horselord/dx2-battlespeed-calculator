import { connect } from 'react-redux';
import BattleSpeed from '../components/BattleSpeed';

const getDemonSpeed = demon => {
  if (demon.speedster) {
    return Math.floor(demon.agility * (1.5 + demon.bonus / 100));
  } else {
    return Math.floor(demon.agility * (1 + demon.bonus / 100));
  }
};

const totalSpeed = demons =>
  getDemonSpeed(demons[0]) +
  getDemonSpeed(demons[1]) +
  getDemonSpeed(demons[2]) +
  getDemonSpeed(demons[3]);

const activeDemons = demons => demons.filter(demon => demon.agility > 0);
const demonCount = demons => activeDemons(demons).length;

const calcBattleSpeed = demons => {
  return Math.floor(totalSpeed(demons) * (100 / demonCount(demons)));
};

const mapStateToProps = state => ({
  battleSpeed: calcBattleSpeed(state.demons)
});

export default connect(mapStateToProps)(BattleSpeed);
