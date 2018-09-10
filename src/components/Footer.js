import React from 'react';
import {
  Segment,
  Image,
  Modal,
  Divider,
  Header,
  List
} from 'semantic-ui-react';
import Instructions from './Instructions';
import blackFrost from '../blackfrost.png';
import {version} from '../constants';

const Footer = () => (
  <Segment
    vertical
    size="mini"
    style={{ background: 'transparent', padding: '1rem', marginTop: '2rem' }}
  >
    <Instructions />
    <Modal trigger={<Image src={blackFrost} size="mini" floated="right" />} closeIcon>
      <Modal.Content>
        <Modal.Description>
          <Header>
            Dx2 Battle Speed Calculator {version}
            <Header.Subheader>
              A tool for Shin Megami Tensei Dx2 Liberation.
            </Header.Subheader>
          </Header>
          <Header sub>About</Header>
          <p>
            Calculates total battle speed of a party, based on demons' agility
            stat, the speed bonus on their brands, and the presence of the{' '}
            <a
              href="https://dx2wiki.com/index.php/Speedster"
              target="_blank"
              rel="noopener noreferrer"
            >
              Speedster
            </a>{' '}
            skill.
          </p>
          <Divider />
          <Header sub>New in v.0.1.1</Header>
          <List as="ul">
            <List.Item as="li">
              Calculate the (hidden, not displayed in-game) battle speed when using a Dx2 leader with an Agility bonus. (Experimental)
            </List.Item>
          </List>
          <Header sub>Planned Features</Header>
          <List as="ul">
            <List.Item as="li">
              Hell's Park 5-demon team compatibility
            </List.Item>
            <List.Item as="li">
              Agility stat lookups for 5★ MAX as well as 6★ MAX
            </List.Item>
          </List>
          <Divider />
          <Header sub>Credits</Header>
          <p>
            App created by{' '}
            <a
              href="https://github.com/horselord"
              target="_blank"
              rel="noopener noreferrer"
            >
              horselord
            </a>. Find me in-game, as <strong>HORSE</strong>!
            <br />
            6★ Agility stats from{' '}
            <a
              href="https://dx2wiki.com/index.php/Demon_List"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dx2 Wiki
            </a>
          </p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
    <p style={{ color: '#fef6d5', textAlign: 'right' }}>
      Dx2 Battle Speed Calculator {version}<br />by{' '}
      <a
        style={{ color: '#fee202' }}
        href="https://github.com/horselord"
        target="_blank"
        rel="noopener noreferrer"
      >
        horselord
      </a>
    </p>
  </Segment>
);

export default Footer;
