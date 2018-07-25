import React, { Component, Fragment } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import Thread from './Thread';

export default class Topics extends Component {
  constructor(props){
    super(props);
    this.state = { 
      activeIndex: -1,
      topics: this.props.topics 
    }
  }


  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    console.log(this.state)
    return (<Fragment>
       <Accordion fluid styled>
      {
        this.state.topics.map((topic, topicIndex) => {
          return <Fragment key={topicIndex} >
            <Accordion.Title active={activeIndex === topicIndex} index={topicIndex} onClick={this.handleClick}>
              <Icon name='dropdown' />
              { topic.title }
            </Accordion.Title>
            <Accordion.Content active={activeIndex === topicIndex}>
              <p>{topic.description}</p>
              <Thread thread={topic.thread}/>
            </Accordion.Content>
        </Fragment>
      })
      }
      </Accordion>
    </Fragment>
    )
  }
}