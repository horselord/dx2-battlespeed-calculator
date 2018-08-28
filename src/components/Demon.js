import React from 'react';
import { Form, Label, Segment, Header, Checkbox, Grid } from 'semantic-ui-react';

class Demon extends React.Component {
  state = {
    agility: '',
    speedster: false,
    brand: '',
    demonBS: ''
  };

  setAgility = e => {
    const agStat = e.target.value;
    this.setState({
      agility: agStat
    }, () => this.calcBS());
  };

  setBrand = e => {
    const brandBonus = e.target.value;
    this.setState({
      brand: brandBonus
    }, () => this.calcBS());
  };

  toggleSpeedster = () => {
    this.setState({
      speedster: !this.state.speedster
    }, () => this.calcBS());
  };

  calcBS = () => {
    const {agility, brand, speedster} = this.state;


    const getBattleSpeed = (agility, speedster, brand) => {
      if (speedster === true) {
        return Math.floor(agility * (1.5 + brand / 100))
      } else {
        return Math.floor(agility * (1 + brand / 100))
      }
    }

    const battleSpeed = getBattleSpeed(agility, speedster, brand);

    this.setState({
      demonBS: Math.floor(battleSpeed)
    })

  }

  render() {
    const { agility, speedster, brand, demonBS } = this.state;
    return (
      <div>
      <Segment attached="top">
        <Form>
          <Form.Input
            fluid
            label="Agility Stat"
            value={agility}
            onChange={this.setAgility}
          />
          <Form.Input
            fluid
            label="Brand % Bonus"
            value={brand}
            onChange={this.setBrand}
          />
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <Form.Checkbox
                  toggle
                  value={speedster}
                  onChange={this.toggleSpeedster}
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <Label color={speedster && 'green'}>Speedster</Label>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
      <Segment attached="bottom">
        <Header>Demon Speed: {demonBS}</Header>
      </Segment>
    </div>
    );
  }
}

export default Demon;
