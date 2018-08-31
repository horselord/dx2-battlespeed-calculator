import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Demon from './Demon';

const Party = ({ demons, updateAgility, updateBonus, toggleSpeedster, onSelectChange, demonOptions, value}) => (
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
              value={value}
            />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  </Container>
);

export default Party;
