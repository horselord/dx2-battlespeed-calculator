import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from 'semantic-ui-react';
import Demon from './Demon';

const Party = ({ demons, updateAgility, updateBonus, toggleSpeedster, onSelectChange, demonOptions}) => (
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
              onSelectChange={
                (e) => onSelectChange(demon.id, {name: e.value})
              }
              demonOptions={demonOptions}
            />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  </Container>
);

Party.propTypes = {
  demons: PropTypes.array.isRequired,
  updateAgility: PropTypes.func.isRequired,
  updateBonus: PropTypes.func.isRequired,
  toggleSpeedster: PropTypes.func.isRequired,
  onSelectChange: PropTypes.func.isRequired,
  demonOptions: PropTypes.array.isRequired,
}

export default Party;
