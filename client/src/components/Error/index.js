import React, { Component } from 'react'
import ErrorPage from "./ErrorPage"

export default class extends Component {
  state = {};
  
  render() {
    return (
      <ErrorPage {...this.props} {...this.state} />
    );
  }
}