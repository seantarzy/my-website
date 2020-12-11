import React from 'react'
import Card from 'react-bootstrap/Card'
import contactImage from './assets/contact-image.jpg' 
import linkedInImage from './assets/linkedIn-image.jpg'
import mediumLogo from './assets/medium-logo.png'
import githubLogo from './assets/github-logo.png'

export default function Contact(){


return (
  <Card>
    <Card.Img
      variant="top"
      src={contactImage}
      style={{ height: 100, width: 100 }}
    />
    <Card.Body>
      <Card.Title>Contact</Card.Title>
      <Card.Text>contact me</Card.Text>
      <a
        href={"https://www.linkedin.com/in/sean-tarzy-997076110/"}
        target="_blank"
      >
        <Card.Img src={linkedInImage} style={{ height: 100, width: 100 }} />
      </a>
      <a href={"https://seantarzy.medium.com/"} target="_blank">
        <Card.Img src={mediumLogo} style={{ height: 75, width: 75 }} />
      </a>
      <a href={"https://github.com/seanytdawg"} target="_blank">
        <Card.Img src={githubLogo} style={{ height: 75, width: 90 }} />
      </a>
    </Card.Body>
    <Card.Footer></Card.Footer>
  </Card>
);
}