import React, { Component } from 'react';
import Project from './projects'
import About from './about'
import Header from './header'
import Contact from './contact'


export default class Mobile extends Component {

  render() {
    return (
      <div>
        <About/>
        <Project/>
        <Contact/>
      </div>);
  }
}
