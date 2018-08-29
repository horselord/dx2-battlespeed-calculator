import React from 'react';
import { Segment, Header, Icon, Statistic } from 'semantic-ui-react';

const BattleSpeed = ({ battleSpeed }) => (
  <Segment textAlign="center" style={{background: '#fef6d5'}}>

      <Statistic size="huge" color="pink">
        <Statistic.Label >Battle Speed</Statistic.Label>
        <Statistic.Value>{battleSpeed > 0 ? battleSpeed : 0}</Statistic.Value>
      </Statistic>

  </Segment>
);

export default BattleSpeed;
