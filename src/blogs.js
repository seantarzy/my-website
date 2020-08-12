import React from 'react'
import Card from 'react-bootstrap/Card'
import blogImage from './assets/blog-image.jpg' 

export default function Blogs (){
    return (
        <Card>
            <Card.Img variant="top" src={blogImage} style={{ height: 100, width: 100 }} />
            <Card.Body>
                <Card.Title>Blogs</Card.Title>
                <Card.Text>
                    These are my blogs
      </Card.Text>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
        </Card>
    )
}