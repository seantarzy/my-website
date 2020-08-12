import React from 'react'
import Card from 'react-bootstrap/Card'
import contactImage from './assets/contact-image.jpg' 

export default function Contact(){


return (
    <Card>
        <Card.Img variant="top" src={contactImage} style={{ height: 100, width: 100 }} />
        <Card.Body>
            <Card.Title>Contact</Card.Title>
            <Card.Text>
                contact me
      </Card.Text>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
    </Card>
)
}