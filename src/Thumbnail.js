import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';

export default function Thumbnail(props) {
    return (
        <div className="project">
            <Link to="">
                <div className="project-image">
                    <img src="" alt="Project Image" />
                </div>
                <div className="project-title">Ordinary Startups</div>
                <div className="project-category">""</div>
            </Link>
        </div>
    );
}
