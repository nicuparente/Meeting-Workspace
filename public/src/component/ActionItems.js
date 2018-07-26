import React, { Component, Fragment } from 'react'
import { List, Image, Form, Icon, Segment, Grid } from 'semantic-ui-react'
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { addActionItem } from '../actions/action-item'

class ActionItems extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      meeting: this.props.meeting,
      form: {
        assignedTo: '',
        description: ''
      }
    }

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleSubmit(event) {
    event.preventDefault()
    //Filter through all the participats
    console.log(this.state)

    let assignTo = this.state.meeting.participants.filter(participant => participant.name.toLowerCase() == this.state.form.assignedTo.toLowerCase())[0]

    this.setState({
      meeting:{
        id:this.state.meeting.id,
        name:this.state.meeting.name,
        date: this.state.meetingdate,
        location:this.state.meeting.location,
        organizer: {...this.state.meeting.organizer},
        participants: [...this.state.meeting.participants],
        actionItems:[...this.state.meeting.actionItems,
          {
            "assignedTo": assignTo,
            "description": this.state.form.description,
            "createdBy": {
              "name": this.state.user.name,
              "id": this.state.user.id,
              "email": this.state.user.email,
              "profileImage": this.state.user.profileImage
            },
            "date": (Date.now() / 1000)
          }],
          topics: [...this.state.meeting.topics]
      },
      form: {
        assignedTo: '',
        description: ''
      }
    })
  }



  // Handle forms
  onHandleChange(event) {
    let newFormValue = this.state.form;
    newFormValue[event.target.id] = event.target.value;
    this.setState({
      form: newFormValue
    });
  }

  render() {
    return (
      <Fragment>
        <Grid columns={2} relaxed='very' padded='horizontally' divided>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <h4>Assigned To:</h4>
                <List relaxed='very'>
                  {
                    this.state.meeting.actionItems ?
                      this.state.meeting.actionItems.map((actionItem, index) => {
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
              </Segment>
            </Grid.Column>

            <Grid.Column verticalAlign='middle' >
              <Segment>
                <Form onSubmit={this.onHandleSubmit} widths='equal'>
                  <Form.Input
                    value={this.state.form.assignedTo}
                    label='Assign to:'
                    onChange={this.onHandleChange}
                    placeholder='Name'
                    id='assignedTo' />
                  <Form.TextArea
                    value={this.state.form.description}
                    label='Description'
                    onChange={this.onHandleChange}
                    placeholder='Add action item description here.. (Markdown Enabled)'
                    id='description' />
                  <Form.Button color="blue">Submit</Form.Button>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  meeting: state.meeting
})

const mapActionsToProps = {
  onAddActionItem: addActionItem
};

export default connect(mapStateToProps, mapActionsToProps)(ActionItems);
