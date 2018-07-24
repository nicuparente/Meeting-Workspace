import React, { Component, Fragment } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import Thread from './Thread';

export default class Topics extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (<Fragment>
      <Accordion fluid styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Where are the servers coming from?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            From buying potatoes?
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Improvements from previous sprint
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            There are many breeds of dogs. Each breed varies in size and temperament. Owners often
            select a breed of dog that they find to be compatible with their own lifestyle and
            desires from a companion.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          How dow we install Azure?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            The current documentation about installing Azure states that we need to buy potatoes. Lots and lots of potatoes. This is becoming a scalablity issue due to the sheer amount of excess
            fries we get from the potatoes.
          </p>
          <Thread/>
        </Accordion.Content>
      </Accordion>
    </Fragment>
    )
  }
}