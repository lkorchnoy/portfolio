import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';

export default function Thumbnail(props) {
    return (
        <div className="project">
            <Link to={props.link}>
                <div className="project-image">
                    <img src={props.image} alt="Project Image" />
                </div>
                <div className="project-title">{props.title}</div>
                <div className="project-category">{props.category}</div>
            </Link>
        </div>
    );
}
