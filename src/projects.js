import React from "react";
import Card from "react-bootstrap/Card";
import projectImage from "./assets/project-image.jpg";
import mnemonicMaker from './assets/mnemonic-maker.png'
export default function Projects() {
  return (
    <Card>
    <Card.Title>Projects:</Card.Title>
    <br>
    </br>

      <Card.Img
        variant="top"
        src={mnemonicMaker}
        style={{ height: 100, width: 100 }}
      />
      <Card.Body>
      </Card.Body>
      <Card.Footer>Mnemonic Maker</Card.Footer>
    </Card>
  );
}
