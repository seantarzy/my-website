import React from 'react'
import Card from 'react-bootstrap/Card'
import contactImage from './assets/contact-image.jpg' 
import linkedInImage from './assets/linkedIn-image.jpg'
import mediumLogo from './assets/medium-logo.png'
import githubLogo from './assets/github-logo.png'

export default function Contact(){

return (
  <div>
      <a
        href={"https://www.linkedin.com/in/sean-tarzy-997076110/"}
        target="_blank"
      >
        <img src={linkedInImage} style={{ height: 100, width: 100 }} />
      </a>
      <a href={"https://seantarzy.medium.com/"} target="_blank">
        <img src={mediumLogo} style={{ height: 75, width: 75 }} />
      </a>
      <a href={"https://github.com/seanytdawg"} target="_blank">
        <img src={githubLogo} style={{ height: 75, width: 90 }} />
      </a>
  </div>
);
}