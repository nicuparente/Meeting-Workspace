import React, { Component, Fragment } from "react";
import { Input, Menu, Segment, Header, Image, Icon } from "semantic-ui-react";

export default class Navbar extends Component {
  state = { activeItem: "meeting" };

  handleItemClick = (e, { name }) => {
    return this.setState({ activeItem: name })
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Segment className='header-nav'>
        <Menu secondary>
          <Menu.Item
              name="home"
            >
            <Header as='h2'>
              <Icon size='massive' name="microsoft"/>
              Workspace
            </Header>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              name="meeting"
              active={activeItem === "meeting"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="create"
              active={activeItem === "create"}
              onClick={this.handleItemClick}
            />
            <Menu.Item>
              <Header as='h4'>
                Hello, Nicu!
              </Header>
            </Menu.Item>
            <Menu.Item position="right">
              <Image avatar size="mini" src="https://avatars0.githubusercontent.com/u/7001751?s=400&u=a56f22c679e54acf7d8b7064f3d26fb67585cf47&v=4" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

      </Segment>
    );
  }
}
