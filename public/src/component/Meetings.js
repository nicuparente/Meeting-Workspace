import React, { Component, Fragment } from 'react';
import { Grid, Card, Image, Checkbox } from 'semantic-ui-react'
import Topics from './Topics';
import ActionItem from './ActionItem';
import { connect } from 'react-redux';
import { updateUser } from '../actions/user-actions'

const MeetingInfo = ({ meeting }) => {
  return (
    <Fragment>
      <h2 className="ui horizontal divider header">
        <i className="calendar alternate outline icon" />
        Meeting Information:
      </h2>
      <Grid >
        <Grid.Row>
          <Grid.Column width={1} />
          <Grid.Column floated='left' width={4}>
            <Card>
              <Image size='large' src='https://avatars0.githubusercontent.com/u/7001751?s=400&u=a56f22c679e54acf7d8b7064f3d26fb67585cf47&v=4' />
              <Card.Content>
                <Card.Header>Nicu</Card.Header>
                <Card.Meta>
                  <span className='date'>Organizer</span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column floated='right' width={8}>
            <span>
              <h3>Install Azure Fasterer</h3>
              <h4>
                <i className="clock outline icon" />
                Time:
                </h4>
              <p> 11:00 AM PST</p>
              <h4>
                <i className="calendar alternate outline icon" />
                Date:
                </h4>
              <p> July 31, 2001</p>
              <h4>
                <i className="location arrow icon" />
                Location:
                </h4>
              <p> Bldg 43/22</p>
            </span>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
      </Grid>
    </Fragment>
  );
}

const TopicHeader = () => {
  return (
    <Fragment>
      <h2 className="ui horizontal divider header">
        <i className="paper plane outline icon" />
        Topics
      </h2>
    </Fragment>
  )
}

const ActionItemsHeader = () => {
  return (
    <Fragment>
      <h2 className="ui horizontal divider header">
        <i className=" tasks icon" />
        After Meeting Action Items
      </h2>
    </Fragment>
  )
}

class Meetings extends Component {
  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }
  onUpdateUser(){
    this.props.onUpdateUser('Rafiki');
  }
  render() {
    console.log(this.props)
    return (
      <Fragment>
        <MeetingInfo />
        <TopicHeader />
        <Topics />
        <ActionItemsHeader />
        <ActionItem />  
        <h1 onClick={this.onUpdateUser}> Derp</h1>
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

