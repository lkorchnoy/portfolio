import React from 'react'
import Thumbnail from './Thumbnail';
import './App.css';

export default function Projects(props) {
    return (
        <div>
            <h1>Projects</h1>

            <Thumbnail
            link="/github"
            image="img1"
            title="Ordinary Startups"
            category="App"
            />

            <Thumbnail
            link="/github"
            image="img2"
            title="Perfect Plant"
            category="App"
            />

            <Thumbnail
            link="/github"
            image="img3"
            title="Free Time"
            category="Website"
            />


        </div>
    )
}
