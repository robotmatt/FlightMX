import React, { Component } from 'react'
import View from "./View"

export default class extends Component {
  state = {this: "test"};
  
  render() {
    return (
      <View {...this.props} {...this.state} />
    );
  }
}