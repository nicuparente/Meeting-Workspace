import React, { Component, Fragment } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { connect } from 'react-redux';

class Thread extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: this.props.thread || [],
      user: this.props.user,
      form:{
        commentDescription: ''
      }
    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }


  onHandleSubmit(event) {
    event.preventDefault()
    this.setState({
      comments: [...this.state.comments,{
        "author": this.state.user.name,
        "id": this.state.user.id,
        "email": this.state.user.email,
        "profileImage":this.state.user.profileImageUrl,
        "date": 1532457008,
        "content": this.state.form.commentDescription,
        "replies": []
      }],
      form:{
        commentDescription: ''
      }
    })
  }


  onHandleChange(event) {
    let newFormValue = this.state.form;
    console.log(event.target.value)
    newFormValue[event.target.id] = event.target.value;
    this.setState({
      form: newFormValue
    });
  }

  render() {
    return (
      <Fragment>
        <Header as='h4' dividing>
          Comments
        </Header>
        
        <Comment.Group size='small'>
          {
            this.state.comments ?
              <Fragment>
                {
                  this.state.comments.map((comment, index) => {
                    return (
                      <Fragment>
                        <Comment>
                          <Comment.Avatar as='a' src={comment.profileImage} />
                          <Comment.Content>
                            <Comment.Author as='a'>{comment.author}</Comment.Author>
                            <Comment.Metadata>
                              <span>Today at 5:42PM</span>
                            </Comment.Metadata>
                            <Comment.Text>{comment.content}</Comment.Text>
                          </Comment.Content>
                        </Comment>
                      </Fragment>
                    )
                  })
                }
              </Fragment> :
              <p><i>No comments yet! Be the first to add one! </i></p>
          }
        <Header as='h4' dividing>
          Add Comment:
        </Header>
          <Form onSubmit={this.onHandleSubmit} size='tiny'>
            <Form.TextArea 
              id="commentDescription" 
              onChange={this.onHandleChange}/>
            <Button content='Create' labelPosition='left' icon='edit' primary size='medium'/>
          </Form>
        </Comment.Group>
      </Fragment>
    )
  }

}

const mapStateToProps = state => ({
  user: state.user,
  meeting: state.meeting
})

export default connect(mapStateToProps)(Thread);
