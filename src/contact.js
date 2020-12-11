import React from 'react'
import Card from 'react-bootstrap/Card'
import contactImage from './assets/contact-image.jpg' 
import linkedInImage from './assets/linkedIn-image.jpg'
import mediumLogo from './assets/medium-logo.png'
import githubLogo from './assets/github-logo.png'
import './App.css'

export default function Contact(){

return (
  <Card>
    <a
      href={"https://www.linkedin.com/in/sean-tarzy-997076110/"}
      target="_blank"
      id="linkedIn-logo"
    >
      <img src={linkedInImage} className = "logo-image"/>
    </a>
    <a href={"https://seantarzy.medium.com/"} target="_blank" id="medium-logo">
      <img src={mediumLogo} id = "medium-logo-image" />
    </a>
    <a href={"https://github.com/seanytdawg"} target="_blank" id="git-logo">
      <img src={githubLogo} className = "logo-image"/>
    </a>
    <p></p>
  </Card>
);
}