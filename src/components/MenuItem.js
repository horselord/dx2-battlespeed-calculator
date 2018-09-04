import React from 'react';
import PropTypes from 'prop-types';
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

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  grade: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default MenuItem;
