import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './projects';
import Blogs from './blogs';
import Videos from './videos';



class App extends React.Component{

render(){

  return (    
    <div>
    <div>
        <Projects/>
        <Blogs/>
        <Videos/>
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
