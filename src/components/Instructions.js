import React from 'react';
import { Button, Modal, List } from 'semantic-ui-react';

const Instructions = () => (
  <Modal trigger={<Button floated="left" inverted>Need Help?</Button>}>
    <Modal.Header>How to Use the Battle Speed Calculator</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <List ordered>
          <List.Item>
            Start by entering the agility stat of at least one demon in your
            party into the box labeled "Agility Stat".
          </List.Item>
          <List.Item>
            Check the demon's Brands, and enter the total Speed % boost from their brands. Don't forget to add 15% if they're equipped with a 2-set of Speed Brands!
          </List.Item>
          <List.Item>
            If the demon has the <em>Speedster</em> skill, tick the Speedster checkbox to calculate the 50% bonus effect.
          </List.Item>
          <List.Item>
            Repeat for each other demon in your party. This will calculate correct battle speed for parties of 1, 2, 3, or 4 demons, as long as the empty party slots are blank.
          </List.Item>
        </List>
      </Modal.Description>
    </Modal.Content>
    <Modal.Header>
      Tips
    </Modal.Header>
    <Modal.Content>
      <Modal.Description>
        Use the calculator for your own party or just theorycraft by inputting a demon's maximum stats! You can find a demon's max agility by checking the <a href="https://dx2wiki.com/index.php/Demon_List" target="_blank" rel="noopener noreferrer">Dx2 Wiki Demon Compendium.</a>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default Instructions;
