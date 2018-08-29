import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from 'semantic-ui-react';
import Demon from './Demon';

const Party = ({ demons, updateAgility, updateBonus, toggleSpeedster }) => (
  <Container>
    <Grid columns={4} doubling stackable>
      <Grid.Row>
        {demons.map(demon => (
          <Grid.Column key={demon.id}>
            <Demon
              {...demon}
              onAgChange={e => updateAgility(demon.id, e.target.value)}
              onBonusChange={e => updateBonus(demon.id, e.target.value)}
              onToggle={() => toggleSpeedster(demon.id)}
            />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  </Container>
);

Party.propTypes = {
  demons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      agility: PropTypes.number,
      bonus: PropTypes.number,
      speedster: PropTypes.bool
    })
  ),
  onAgChange: PropTypes.func.isRequired,
  onBonusChange: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default Party;
