import React from 'react';
import PartyContainer from './containers/PartyContainer';
import BattleSpeedContainer from './containers/BattleSpeedContainer'

const App = () => (
  <div>
    <PartyContainer />
    <BattleSpeedContainer />
  </div>
)

export default App



// import Party from './components/Party';
// import {
//   Segment,
//   Grid,
//   Form,
//   Label,
//   Header,
//   Container
// } from 'semantic-ui-react';
//
// class App extends React.Component {
//   state = {
//     demon1: {
//       num: '1',
//       agility: 0,
//       bonus: 0,
//       speedster: false
//     },
//     demon2: {
//       num: '2',
//       agility: 0,
//       bonus: 0,
//       speedster: false
//     },
//     demon3: {
//       num: '3',
//       agility: 0,
//       bonus: 0,
//       speedster: false
//     },
//     demon4: {
//       num: '4',
//       agility: 0,
//       bonus: 0,
//       speedster: false
//     },
//     totalBS: ''
//   };
//
//   onChange = (e, demonNum, statName) => {
//     this.setState(
//       {
//         [demonNum]: {
//           ...this.state[demonNum],
//           [statName]: e.target.value
//         }
//       },
//       () => this.calcTotal()
//     );
//   };
//
//   onToggle = (e, demonNum) => {
//     this.setState(
//       {
//         [demonNum]: {
//           ...this.state[demonNum],
//           speedster: !this.state[demonNum].speedster
//         }
//       },
//       () => this.calcTotal()
//     );
//   };
//
//   calcTotal = () => {
//     const { demon1, demon2, demon3, demon4 } = this.state;
//
//     const getDemonSpeed = demonX => {
//       if (demonX.speedster) {
//         return Math.floor(demonX.agility * (1.5 + demonX.bonus / 100));
//       } else {
//         return Math.floor(demonX.agility * (1 + demonX.bonus / 100));
//       }
//     };
//
//     const d1s = getDemonSpeed(demon1);
//     const d2s = getDemonSpeed(demon2);
//     const d3s = getDemonSpeed(demon3);
//     const d4s = getDemonSpeed(demon4);
//
//     const totalBS = Math.floor((d1s + d2s + d3s + d4s) * (100 / 4));
//
//     this.setState({
//       battleSpeed: totalBS
//     });
//   };
//
//   render() {
//     const { demon1, demon2, demon3, demon4 } = this.state;
//     return (
//       <div>
//         <Segment color="blue" attached="top">
//           <Container>
//             <Grid doubling columns={4}>
//               <Grid.Row>
//                 <Grid.Column>
//                   <Demon
//                     {...demon1}
//                     onAgChange={e => this.onChange(e, 'demon1', 'agility')}
//                     onBonusChange={e => this.onChange(e, 'demon1', 'bonus')}
//                     onSpeedsterChange={e => this.onToggle(e, 'demon1')}
//                   />
//                 </Grid.Column>
//                 <Grid.Column>
//                   <Demon
//                     {...demon2}
//                     onAgChange={e => this.onChange(e, 'demon2', 'agility')}
//                     onBonusChange={e => this.onChange(e, 'demon2', 'bonus')}
//                     onSpeedsterChange={e => this.onToggle(e, 'demon2')}
//                   />
//                 </Grid.Column>
//                 <Grid.Column>
//                   <Demon
//                     {...demon3}
//                     onAgChange={e => this.onChange(e, 'demon3', 'agility')}
//                     onBonusChange={e => this.onChange(e, 'demon3', 'bonus')}
//                     onSpeedsterChange={e => this.onToggle(e, 'demon3')}
//                   />
//                 </Grid.Column>
//                 <Grid.Column>
//                   <Demon
//                     {...demon4}
//                     onAgChange={e => this.onChange(e, 'demon4', 'agility')}
//                     onBonusChange={e => this.onChange(e, 'demon4', 'bonus')}
//                     onSpeedsterChange={e => this.onToggle(e, 'demon4')}
//                   />
//                 </Grid.Column>
//               </Grid.Row>
//             </Grid>
//           </Container>
//         </Segment>
//         <Segment attached="bottom">
//           <Header>
//             Battle Speed: {this.state.battleSpeed > 0 && this.state.battleSpeed}
//           </Header>
//         </Segment>
//       </div>
//     );
//   }
// }
//
// const Demon = ({
//   agility,
//   bonus,
//   speedster,
//   onAgChange,
//   onBonusChange,
//   onSpeedsterChange,
//   num
// }) => (
//   <Segment>
//     <Header>Demon {num}</Header>
//     <Form onSubmit={e => e.preventDefault()}>
//       <Form.Input
//         fluid
//         label="Agility Stat"
//         value={agility}
//         onChange={onAgChange}
//         name="agility"
//       />
//
//       <Form.Input
//         fluid
//         label="Speed % Bonus From Brands"
//         value={bonus}
//         name="bonus"
//         onChange={onBonusChange}
//       />
//
//       <Form.Checkbox
//         toggle
//         value={speedster}
//         name="speedster"
//         label="Check if this Demon has Speedster"
//         onChange={onSpeedsterChange}
//       />
//     </Form>
//   </Segment>
// );
//
// export default App;
