import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './projects';
import Blogs from './blogs';
import Videos from './videos';
import Contact from './contact'
import './componentStyles.css'

class App extends React.Component{

  state = {
      projects: [],
      blogs: [],
      videos: [],
      contact: []
  }

  componentDidMount=()=>{
    console.log(this.state)
    console.log("yo")
  }

  styles = {
    height: 20,
    width: 20
  }
render(){

  const divStyle = {
    height: 20,
    color: 'blue',

  };


  return (    
    <div className = "whole-app">
      <header className="App-header">
        Sean Tarzy's Portfolio
      </header>
    <div>
        <Projects projects={this.state.projects}/>
        <Blogs blogs={this.state.blogs} className="card"/>
        <Videos videos={this.state.videos} className="card"/>
        <Contact contact={this.state.contact} className="card"/>
    </div>
    </div>
)
  };
}

export default App;
