import React from "react";
import { List } from "semantic-ui-react";

const ChangelogItem = ({ changes }) => (
  <List bulleted>
    {changes.map((li, i) => <List.Item key={i}>{li}</List.Item>)}
  </List>
);

export default ChangelogItem;
