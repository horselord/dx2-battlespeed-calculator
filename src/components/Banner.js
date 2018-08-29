import React from 'react';
import {Segment, Header, Image} from 'semantic-ui-react';
import logo from '../dx2-icon.jpg';

const Banner = () => (
  <Segment secondary vertical inverted style={{background: 'transparent'}} textAlign="center">
    <Image src={logo} inline size="tiny"/>
    <Header size="huge" style={{color: '#fef6d5'}}>Dx2 Battle Speed Calculator</Header>
    <p style={{color: '#fef6d5'}}>Shin Megami Tensei: Dx2 Liberation</p>
  </Segment>
)

export default Banner;
