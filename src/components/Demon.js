import React from 'react';
import { Segment, Grid, Form, Header } from 'semantic-ui-react';

const Demon = ({ id, agility, bonus, speedster, onAgChange, onBonusChange, onToggle }) => (
  <Segment>
    <Header>Demon {id}</Header>
    <Form>
      <Form.Input
        label="Agility Stat"
        value={agility}
        onChange={onAgChange}
        name="agility"
        placeholder={`Enter Demon ${id} Agility`}
      />
      <Form.Input
        label="Speed % Bonus from Brands"
        value={bonus}
        onChange={onBonusChange}
        name="bonus"
        placeholder={`Enter Demon ${id} Brand Speed Bonuses`}
      />
      <Form.Checkbox
        label="Demon Has Speedster"
        value={speedster}
        name="speedster"
        onChange={onToggle}
      />
    </Form>
  </Segment>
);

export default Demon;
