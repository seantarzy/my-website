import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './projects';
import Blogs from './blogs';
import Videos from './videos';
import Contact from './contact'


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
render(){




  return (    
    <div>
    <div>
        <Projects projects ={this.state.projects}/>
        <Blogs blogs={this.state.blogs}/>
        <Videos videos={this.state.videos}/>
        <Contact contact={this.state.contact}/>
    </div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sean Tarzy <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
    </div>
    </div>
)
  };
}

export default App;
