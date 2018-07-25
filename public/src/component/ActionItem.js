import React, { Component, Fragment } from 'react'
import { List, Image, Form } from 'semantic-ui-react'



class ActionItems extends Component {

  render() {
    return (
      <Fragment>
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
                Investigate connectivity Issue{' '}
                <a>
                  <b>ICM 19472145</b>
                </a>{' '}
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
         <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Assigned to' placeholder='Name' />
          </Form.Group>
          <Form.TextArea label='Description' placeholder='Add action item description here..' />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Fragment>
    )

  }
}


export default ActionItems;
