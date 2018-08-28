import React from 'react';
import {Segment, Header} from 'semantic-ui-react';

const BattleSpeed = ({battleSpeed}) => (
  <Segment attached="bottom">
    <Header>Battle Speed: {battleSpeed > 0 && battleSpeed}</Header>
  </Segment>
)

export default BattleSpeed;
