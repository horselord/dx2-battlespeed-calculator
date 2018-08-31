import React from 'react';
import { Grid } from 'semantic-ui-react';

const MenuItem = ({ name, race, grade }) => (
  <Grid columns={2}>
    <Grid.Row>
      <Grid.Column width={4}>
        <span style={{
          textTransform: 'uppercase',
          fontSize: '.5rem'
        }}>{race}</span>
      </Grid.Column>
      <Grid.Column width={12}>
        <span>{name}</span>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default MenuItem;
