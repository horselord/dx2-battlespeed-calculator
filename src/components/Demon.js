import React from 'react';
import { Segment, Form, Header } from 'semantic-ui-react';

const Demon = ({
  id,
  agility,
  bonus,
  speedster,
  onAgChange,
  onBonusChange,
  onToggle
}) => (
  <Segment style={{ background: 'linear-gradient(45deg, #fcc700, #fee202' }}>
    <Header>Demon {id}</Header>
    <Form>
      <Form.Input
        label="Agility Stat"
        value={agility}
        onChange={onAgChange}
        name="agility"
        placeholder={`Demon ${id} Agility`}
      />
      <Form.Input
        label="Speed % Bonus from Brands"
        value={bonus}
        onChange={onBonusChange}
        name="bonus"
        placeholder={`Demon ${id} Brand Speed %`}
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
