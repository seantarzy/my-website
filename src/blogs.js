import React from 'react'
import Card from 'react-bootstrap/Card'
import blogImage from './assets/blog-image.jpg' 

export default function Blogs (props){
    
    return (
      <div className = "card">
      <br>
      </br>
      <a href = {props.blog.link} target = "_blank">
        <img
          variant="top"
          src={props.blog.imageSrc}
          style={{ height: 100, width: 100 }}
        />
        </a>
        <footer className = "card-footer">{props.blog.title}</footer>
      </div>
    );

  }
