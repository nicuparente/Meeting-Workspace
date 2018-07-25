import React, { Component, Fragment } from 'react'
import { List, Image, Form, Icon } from 'semantic-ui-react'
import ReactMarkdown from 'react-markdown';


class ActionItems extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actionItems: this.props.actionItems,
      form: {
        assignedTo: '',
        description: ''
      }
    }

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
  }

  onHandleSubmit(event) {
    event.preventDefault()
    console.log(this.state.form)
  }

  onHandleChange(event) {
    this.setState({
        form: {
          [event.target.id]:event.target.value
        }
      });
  }

  render() {
    return (
      <Fragment>
        <h4>Assigned To:</h4>
        <List relaxed='very'>
          {
            this.state.actionItems ?
              this.state.actionItems.map((actionItem, index) => {
                return (
                  <Fragment>
                    <List.Item>
                      <Image avatar src={actionItem.assignedTo.profileImage} />
                      <List.Content>
                        <List.Header as='a'>{actionItem.assignedTo.name} | {actionItem.assignedTo.email}</List.Header>
                        <List.Description>
                          <ReactMarkdown source={actionItem.description} />
                          <p><i>Created by: {actionItem.createdBy.name}</i></p>
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </Fragment>
                )
              })
              :
              <h3><i>No action items created or assign</i></h3>
          }
        </List>
        <Form onSubmit={this.onHandleSubmit} widths='equal'> 
          <Form.Input 
            value={this.state.form.assignedTo} 
            label='Assigned to' 
            onChange={this.onHandleChange}
            placeholder='Name'
            id='assignedTo' />
          <Form.TextArea 
            value={this.state.form.description} 
            label='Description' 
            onChange={this.onHandleChange}
            placeholder='Add action item description here..' 
            id='description'/>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </Fragment>
    )
  }
}

export default ActionItems;
