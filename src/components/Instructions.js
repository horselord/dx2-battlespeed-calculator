import React from "react";
import { Button, Modal, List, Segment } from "semantic-ui-react";

const Instructions = () => (
  <Modal
    trigger={
      <Button compact floated="left" basic color="yellow" inverted>
        Need Help?
      </Button>
    }
    as={Segment}
    size="large"
    style={{ backgroundColor: "transparent" }}
    closeIcon
  >
    <Modal.Header
      style={{ background: "linear-gradient(45deg, #fcc700, #fee202" }}
    >
      How to Use the Battle Speed Calculator
    </Modal.Header>
    <Modal.Content
      style={{ background: "linear-gradient(45deg, #fcc700, #fee202" }}
    >
      <Modal.Description>
        <List ordered>
          <List.Item>
            Enter your demon's agility stat, or simply select a demon from the
            dropdown menu to fill the field with that demon's agility at 6★ MAX.
          </List.Item>
          <List.Item>
            Enter the total Speed % boost from the demon's brands. Don't forget
            to add 15% if they're equipped with a 2-set of Speed Brands!
          </List.Item>
          <List.Item>
            If the demon has the{" "}
            <em>
              <strong>Speedster</strong>
            </em>{" "}
            skill, check the Speedster checkbox to calculate the 50% bonus
            effect.
          </List.Item>
          <List.Item>
            Repeat for each other demon in your party. This will calculate
            correct battle speed for parties of 1, 2, 3, or 4 demons, as long as
            the empty party slots are blank.
          </List.Item>
        </List>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default Instructions;
