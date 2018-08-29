import React from 'react';
import { Segment } from 'semantic-ui-react';

const Footer = () => (
  <Segment vertical size="mini" clearing inverted style={{background: 'transparent', padding: '1rem', marginTop: '8rem'}}>
    <p style={{ color: '#fef6d5', textAlign: 'right' }}>
      Dx2 Battle Speed Calculator v.0.1<br />by horse-lord
    </p>
  </Segment>
);

export default Footer;

// style={{position: 'relative', bottom: '0', padding: '1rem', marginTop: '25vh'}}
