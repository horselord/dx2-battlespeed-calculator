import React from 'react';
import { Segment, Header, Icon, Statistic } from 'semantic-ui-react';

const BattleSpeed = ({ battleSpeed }) => (
  <Segment attached="bottom" textAlign="center" secondary>
    {battleSpeed > 0 ? (
      <Statistic size="huge" color="red">
        <Statistic.Label>Battle Speed</Statistic.Label>
        <Statistic.Value>{battleSpeed}</Statistic.Value>
      </Statistic>
    ) : <p>Enter a demon's agility to begin!</p>}
  </Segment>
);

export default BattleSpeed;
