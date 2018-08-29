import React from 'react';
import { Segment, Image } from 'semantic-ui-react';
import blackFrost from '../blackfrost.png';

const Footer = () => (
  <Segment
    vertical
    size="mini"
    style={{ background: 'transparent', padding: '1rem', marginTop: '8rem' }}
  >
    <Image
      src={blackFrost}
      size="mini"
      floated="right"
      href="https://github.com/horselord"
    />
    <p style={{ color: '#fef6d5', textAlign: 'right' }}>
      Dx2 Battle Speed Calculator v.0.1<br />by{' '}
      <a style={{ color: '#fee202' }} href="https://github.com/horselord">
        horselord
      </a>
    </p>
  </Segment>
);

export default Footer;
