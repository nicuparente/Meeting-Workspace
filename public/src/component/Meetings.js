import React, { Component, Fragment } from 'react';
import { Grid, Card, Image, Segment, Container, List, Header, Divider } from 'semantic-ui-react'
import Topics from './Topics';
import ActionItems from './ActionItems';
import { connect } from 'react-redux';
import { updateUser } from '../actions/user-actions'
import EpochConverter from '../lib/epoch-converter';

const MeetingInfo = ({ meeting }) => {
  console.log(meeting)
  return (
    <Fragment>
      <h2 className="ui horizontal divider header">
        <i className="calendar alternate outline icon" />
        Meeting Information:
      </h2>
      <Grid columns={2} relaxed='very' padded='horizontally'>
        <Grid.Row>
          <Grid.Column >
            <Segment raised>
              <Header as='h2'>Participants</Header>
              <Divider />
              <List relaxed='very' divided>
                <List.Item>
                  <Image avatar src={meeting.organizer.profileImage} />
                  <List.Content>
                    <List.Header as='a'>{meeting.organizer.name} (Organizer) </List.Header>
                    <List.Description>{meeting.organizer.email} </List.Description>
                  </List.Content>
                </List.Item>
                {
                  meeting.participants.map((participant, index) => {
                    if (participant.name === meeting.organizer.name) {
                      return;
                    }
                    return (
                      <Fragment>
                        <List.Item>
                          <Image avatar src={participant.profileImage} />
                          <List.Content>
                            <List.Header as='a'>{participant.name} </List.Header>
                            <List.Description>{participant.email}</List.Description>
                          </List.Content>
                        </List.Item>
                      </Fragment>
                    )
                  })
                }
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment raised>
              <Header as='h2' textAlign='center'>{meeting.name}</Header>
              <Divider />
              <List relaxed divided>
                <List.Item>
                  <List.Icon name='clock outline' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='h4' size='large'>Time</List.Header>
                    <List.Description as='a'>{EpochConverter(meeting.date).hourMinutes}</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='calendar alternate outline' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='h4' size='large'>Date</List.Header>
                    <List.Description as='a'>{EpochConverter(meeting.date).monthDayYear}</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='location arrow' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='h4' size='large'>Location</List.Header>
                    <List.Description as='a'>{meeting.location}</List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  );
}

const TopicHeader = () => {
  return (
    <Fragment>
      <h2 className="ui horizontal divider header section">
        <i className="paper plane outline icon" />
        Topics
      </h2>
    </Fragment>
  )
}

const ActionItemsHeader = () => {
  return (
    <Fragment>
      <h2 className="ui horizontal divider header section">
        <i className=" tasks icon" />
        Action Items
      </h2>
    </Fragment>
  )
}

class Meetings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <MeetingInfo meeting={this.props.meeting} />
        <TopicHeader />
        <Topics topics={this.props.meeting.topics} />
        <ActionItemsHeader />
        <ActionItems actionItems={this.props.meeting.actionItems} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  meeting: state.meeting
})

const mapActionsToProps = {
  onUpdateUser: updateUser
};


export default connect(mapStateToProps, mapActionsToProps)(Meetings);

