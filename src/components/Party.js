import React from 'react';
import Demon from './Demon';
import { Grid } from 'semantic-ui-react';

const Party = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={4}>
        <Demon index="1" />
      </Grid.Column>
      <Grid.Column width={4}>
        <Demon index="2" />
      </Grid.Column>
      <Grid.Column width={4}>
        <Demon index="3" />
      </Grid.Column>
      <Grid.Column width={4}>
        <Demon index="4" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

// class Party extends React.Component {
//   state = {
//     party: [
//       {
//         demonIndex: 1,
//         agStat: 0,
//         speedster: false,
//         brandBonus: 0
//       },
//       {
//         demonIndex: 2,
//         agStat: 0,
//         speedster: false,
//         brandBonus: 0
//       },
//       {
//         demonIndex: 3,
//         agStat: 0,
//         speedster: false,
//         brandBonus: 0
//       },
//       {
//         demonIndex: 4,
//         agStat: 0,
//         speedster: false,
//         brandBonus: 0
//       }
//     ]
//   };
//
//   onAgChange = () => {
//     console.log('AG Changed')
//   }
//
//   render() {
//     const { party } = this.state;
//     return (
//       <Grid>
//         <Grid.Row>
//           {party.map(demon => (
//             <Grid.Column width={4}>
//               <Demon />
//             </Grid.Column>
//           ))}
//         </Grid.Row>
//       </Grid>
//     );
//   }
// }

export default Party;
