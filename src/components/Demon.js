import React from 'react';
import { Segment, Form, Header, Divider, Dropdown, Label } from 'semantic-ui-react';

const Demon = ({
  id,
  agility,
  bonus,
  speedster,
  onAgChange,
  onBonusChange,
  onToggle,
  demonOptions,
  onSelectChange
}) => (
  <Segment style={{ background: 'linear-gradient(45deg, #fcc700, #fee202' }}>
    <Divider horizontal>Pick a Demon</Divider>
    <Form>
      <Form.Dropdown
        fluid
        label="Fill with 6★ Max Stats"
        placeholder={`Demon ${id}`}
        selection
        lazyLoad
        closeOnChange
        search
        options={demonOptions}
        onChange={(e, { value }) => onSelectChange({ value })}
      />
      <Divider horizontal>Customize Stats</Divider>
      <Form.Group widths={2}>
        <Form.Input
          label="Agility"
          value={agility}
          onChange={onAgChange}
          name="agility"
          placeholder={`Agility`}
        />
        <Form.Input
          label="Brand Speed %"
          value={bonus}
          onChange={onBonusChange}
          name="bonus"
          placeholder={`Brand Speed %`}
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
