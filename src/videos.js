import React from 'react'
import Card from 'react-bootstrap/Card'
import videoImage from './assets/video-image.jpg' 


export default function Videos(){

    return (
        <Card>
            <Card.Img variant="top" src={videoImage} style={{ height: 100, width: 100 }} />
            <Card.Body>
                <Card.Title>Videos</Card.Title>
                <Card.Text>
                    These are my videos
      </Card.Text>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
        </Card>
        )
}
