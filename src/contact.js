import React from 'react'
import Card from 'react-bootstrap/Card'
import contactImage from './assets/contact-image.jpg' 
import linkedInImage from './assets/linkedIn-image.jpg'

export default function Contact(){


return (
    <Card>
        <Card.Img variant="top" src={contactImage} style={{ height: 100, width: 100 }} />
        <Card.Body>
            <Card.Title>Contact</Card.Title>
            <Card.Text>
                contact me
      </Card.Text>
            <a href={'https://www.linkedin.com/in/sean-tarzy-997076110/'}>
            <Card.Img src={linkedInImage} style={{ height: 100, width: 100 }} href={'https://www.linkedin.com/in/sean-tarzy-997076110/'}/>
        </a>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
    </Card>
)
}