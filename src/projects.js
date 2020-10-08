import React from "react";
import Card from "react-bootstrap/Card";
import projectImage from "./assets/project-image.jpg";

export default function Projects() {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={projectImage}
        style={{ height: 100, width: 100 }}
      />
      <Card.Body>
        <Card.Title>Blogs</Card.Title>
        <Card.Text>These are my projects</Card.Text>
      </Card.Body>
      <Card.Footer></Card.Footer>
    </Card>
  );
}
