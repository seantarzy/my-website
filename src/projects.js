import React from "react";
import Card from "react-bootstrap/Card";
import projectImage from "./assets/project-image.jpg";
import mnemonicMaker from './assets/mnemonic-maker.png'
import './App.css'
export default function Projects(props) {



    return (
      <div className = "card">
      <br>
      </br>
      <a href = {props.project.link} target = "_blank">
        <img
          variant="top"
          src={props.project.imageSrc}
          style={{ height: 100, width: 100 }}
        />
        </a>
        <footer className = "card-footer">{props.project.name}</footer>
      </div>
    );

  }

