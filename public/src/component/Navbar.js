import React, { Component, Fragment } from "react";
import { Input, Menu, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Link to={'/'}>
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to={'/meetings'}>
            <Menu.Item
              name="meetings"
              active={activeItem === "meetings"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to={'/create'}> 
          <Menu.Item
            name="create"
            active={activeItem === "create"}
            onClick={this.handleItemClick}
          />
          </Link>
          <Menu.Menu position="right">
            <Menu.Item>Hello, Nicu!</Menu.Item>
            <Menu.Item position="right">
              <img src="https://avatars0.githubusercontent.com/u/7001751?s=400&u=a56f22c679e54acf7d8b7064f3d26fb67585cf47&v=4" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        
      </Segment>
    );
  }
}
