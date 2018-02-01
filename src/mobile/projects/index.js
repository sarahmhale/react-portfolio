import React, { Component } from 'react';
import Image from './Image.js'
import './index.css'
var json = require('./testData.json');


export default class Project extends Component {

  render() {
    return (<div className='background'>
      <h1>Projects</h1>
      {json.map((data) => {
        return (<div className='container'>
          <Image imagePath= {data.imagePath} />
          <p>{data.text}</p>
        </div>)
      })}
      <a href="https://www.linkedin.com/in/sarah-hale-365a7113b/">Full cv -> linkedin</a>
    </div>)
  }
}
