import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Form, Divider } from 'semantic-ui-react';

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
        selectOnNavigation={false}
        search
        options={demonOptions}
        onChange={(e, { value }) => onSelectChange({ value })}
      />
      <Divider horizontal>Customize Stats</Divider>
      <Form.Group widths={2}>
        <Form.Input
          type="number"
          label="Agility"
          value={agility}
          onChange={onAgChange}
          name="agility"
          placeholder={`Agility`}
        />
        <Form.Input
          type="number"
          label="Brand Speed %"
          value={bonus}
          onChange={onBonusChange}
          name="bonus"
          placeholder={`Speed %`}
        />
      </Form.Group>
      <Form.Checkbox
        label="Demon Has Speedster"
        toggle
        checked={speedster}
        name="speedster"
        onChange={onToggle}
      />
    </Form>
  </Segment>
);

Demon.propTypes = {
  id: PropTypes.number.isRequired,
  agility: PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
  bonus: PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
  speedster: PropTypes.bool.isRequired,
  onAgChange: PropTypes.func.isRequired,
  onBonusChange: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  demonOptions: PropTypes.array.isRequired,
  onSelectChange: PropTypes.func.isRequired
}

export default Demon;
