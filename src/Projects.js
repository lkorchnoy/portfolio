import React from 'react'
import Thumbnail from './Thumbnail';
import './App.css';
import { motion } from "framer-motion"

import Image1 from './img1.jpg';
import Image2 from './img2.jpg';
import Image3 from './img3.jpg';


export default function Projects(props) {
   
    return (
        
        <div>
            <h1>Projects</h1>

            <Thumbnail
            link="/github"
            img src={Image1}
            title="Ordinary Startups"
            category="App"
            />
            

            <Thumbnail
            link="/github"
            img src={Image2}
            title="Perfect Plant"
            category="App"
            />

            <Thumbnail
            link="/github"
            img src={Image3}
            title="Free Time"
            category="App"
            />


        </div>
    )
}
