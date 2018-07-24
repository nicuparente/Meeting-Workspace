import React from 'react'
import { List, Image } from 'semantic-ui-react'

const ActionItems = () => (
  <List>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
      <List.Content>
        <List.Header as='a'>Rachel</List.Header>
        <List.Description>
          Follow up on CosmosDb issue{' '}
          <a>
            <b>#504123</b>
          </a>{' '}
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
      <List.Content>
        <List.Header as='a'>Lindsay</List.Header>
        <List.Description>
          Create progress report on buildout operation
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/matthew.png' />
      <List.Content>
        <List.Header as='a'>Matthew</List.Header>
        <List.Description>
          Investigate connectivity Issue{'www.google.com '}
          <a>
            <b>ICM 19472145</b>
          </a>{' '}
        </List.Description>
      </List.Content>
    </List.Item>
  </List>
)

export default ActionItems;
