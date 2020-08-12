import React from "react"
import Card from 'react-bootstrap/Card'
import projectImage from './assets/project-image.jpg' 
export default function  Projects(){


return (
        <Card>
        <Card.Img variant="top" src={projectImage}/>
        <Card.Body>
            <Card.Title>Projects</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
      </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
    </Card>
)
}