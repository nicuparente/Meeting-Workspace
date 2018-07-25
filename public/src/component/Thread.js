import React, { Component, Fragment } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { comment } from '../../../node_modules/postcss';

class Thread extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: this.props.thread
    }
  }
  render() {
    return (
      <Fragment>
        <Header as='h4' dividing>
          <p></p>
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
          <Form reply size='tiny'>
            <Form.TextArea />
            <Button content='Add Comment' labelPosition='left' icon='edit' primary />
          </Form>
        </Comment.Group>
      </Fragment>
    )
  }

}

export default Thread;
