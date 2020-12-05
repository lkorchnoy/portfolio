import React from 'react'
 import { FaFileDownload} from 'react-icons/fa'
import ReactPDF from '@react-pdf/renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons'
 import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Resume from './resume.pdf'
import { motion } from 'framer-motion'

function Contact() {
    return (
        <div class="block">
  
        
        
            <h3>Let's Chat</h3>
            
            <span><FontAwesomeIcon icon={faLinkedin} color="lightblack" size="3x" /></span>
            <span><FontAwesomeIcon icon={faGithub} color="black" size="3x" /></span>
            <span><FontAwesomeIcon icon={faMedium} color="black" size="3x" /></span>
            <span><FontAwesomeIcon icon={faEnvelope} color="black" size="3x" /></span>
            {/* <span><FontAwesomeIcon icon={faFilePdf} color="orange" size="2x" src={Resume} alt="My Resume" /></span> */}
            
            <span><FontAwesomeIcon icon={faYoutube} color="black" size="3x" /></span>
        </div>
    )
}

export default Contact
