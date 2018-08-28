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

// calcTotal = () => {
//   const { demon1, demon2, demon3, demon4 } = this.state;
//
//   const getDemonSpeed = demonX => {
//     if (demonX.speedster) {
//       return Math.floor(demonX.agility * (1.5 + demonX.bonus / 100));
//     } else {
//       return Math.floor(demonX.agility * (1 + demonX.bonus / 100));
//     }
//   };
//
//   const d1s = getDemonSpeed(demon1);
//   const d2s = getDemonSpeed(demon2);
//   const d3s = getDemonSpeed(demon3);
//   const d4s = getDemonSpeed(demon4);
//
//   const totalBS = Math.floor((d1s + d2s + d3s + d4s) * (100 / 4));
//
//   this.setState({
//     battleSpeed: totalBS
//   });
// };
