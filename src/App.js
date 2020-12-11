import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './projects';
import Blogs from './blogs';
import Contact from './contact'
import Bio from './Bio'
import mnemonicMaker from './assets/mnemonic-maker.png'
import seaMonsterRiddle from './assets/sea-monster-riddle.png'
import teacherToCoder from './assets/teacher-to-coder.png'
import genuineLeader from './assets/genuine-leader.png'
import './componentStyles.css'

class App extends React.Component {
  state = {
    projects: [
      {
        id: 1,
        name: "Mnemonic Maker",
        imageSrc: mnemonicMaker,
        link: "https://mnemonicmaker.netlify.app/",
      },
      {
        id: 2,
        name: "Sea Monster TedEd Riddle",
        imageSrc: seaMonsterRiddle,
        link: "https://github.com/seanytdawg/Sea-Monster-TED-Ed-Riddle",
      },
    ],
    blogs: [
      {
        id: 1,
        title: "School Teacher to coder",
        imageSrc: teacherToCoder,
        link:
          "https://medium.com/swlh/how-being-a-school-teacher-set-me-up-to-be-a-coder-3d977cbc30b3",
      },
      {
        id: 2,
        title: "The Genuine Leader pt. 1",
        imageSrc: genuineLeader,
        link: "https://seantarzy.medium.com/the-genuine-leader-39ed769e5b7c",
      },
      {
        id: 3,
        title: "Sea Monster TedEd Riddle Blog",
        imageSrc: seaMonsterRiddle,
        link:
          "https://seantarzy.medium.com/solving-the-sea-monster-ted-ed-riddle-using-vanilla-javascript-800fe02be6e0",
      },
    ],
    videos: [],
  };

  render() {
    return (
      <div className="whole-app">
        <header className="App-header">Sean Tarzy's Portfolio</header>
        <Bio />
        {/* <Blogs blogs={this.state.blogs} className="card"/> */}
        {/* <Videos videos={this.state.videos} className="card"/> */}
        <text> Featured Projects: </text>
        <div className="card-container">
          {this.state.projects.map((project) => (
            <Projects project={project} key={project.id}/>
          ))}
          <br></br>
            <br>
            </br>
          <header> Featured Blogs: </header>
          {this.state.blogs.map((blog)=>
            <Blogs blog = {blog} key = {blog.id}/>
          )}
        </div>
        <Contact contact={this.state.contact} />
      </div>
    );
  }
}

export default App;
