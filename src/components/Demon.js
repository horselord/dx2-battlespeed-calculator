import React from 'react';
import { Segment, Form, Header, Dropdown, Divider } from 'semantic-ui-react';


const Demon = ({
  id,
  agility,
  bonus,
  speedster,
  onAgChange,
  onBonusChange,
  onToggle,
  demonOptions,
  onSelectChange,
}) => (
  <Segment style={{ background: 'linear-gradient(45deg, #fcc700, #fee202' }}>
    <Header size="tiny" as="h6">Slot {id}</Header>
    <Form>
      <Form.Dropdown
        fluid
        label="Demon (Optional)"
        placeholder="Pick A Demon"
        selection
        closeOnChange
        options={demonOptions}
        onChange={(e, {value}) => onSelectChange({value})}
      />
      <Divider horizontal>customize stats</Divider>
      <Form.Group widths={2}>
      <Form.Input
        label="Agility"
        value={agility}
        onChange={onAgChange}
        name="agility"
        placeholder={`Demon ${id} Agility`}
      />
      <Form.Input
        label="Brand Speed %"
        value={bonus}
        onChange={onBonusChange}
        name="bonus"
        placeholder={`Demon ${id} Brand Speed %`}
      />
    </Form.Group>
      <Form.Checkbox
        label="Demon Has Speedster"
        checked={speedster}
        name="speedster"
        onChange={onToggle}
      />
    </Form>
  </Segment>
);

export default Demon;
