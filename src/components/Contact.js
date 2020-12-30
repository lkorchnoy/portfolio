import React from 'react'
import { FaFileDownload} from 'react-icons/fa'
import ReactPDF from '@react-pdf/renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'
// import Resume from './resume.pdf'
import { motion } from 'framer-motion'
import { SiGmail } from 'react-icons/si';
import { Component } from 'react';

const contact = (props) => {
  
    return (
        <div class="block">
        <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 2,
              opacity: 1,
              transition: {
                delay: .6
              }
            },
          }}>
              
              <h3 className="title">Let's Chat</h3><br></br>
        </motion.div>
       
  
        
        
            
            
            <span><a href="https://www.linkedin.com/in/ludmilakorchnoy/"><FontAwesomeIcon icon={faLinkedin} color="black" size="3x" /></a></span>
             
            <span><a href="https://github.com/lkorchnoy"><FontAwesomeIcon icon={faGithub} color="black" size="3x" /></a></span>
            <span><a href="https://ludmilakorchnoy.medium.com/"><FontAwesomeIcon icon={faMedium} color="black" size="3x" /></a></span>
            {/* <span><FontAwesomeIcon icon={faEnvelope} color="black" size="3x" /></span> */}
           
            
            
        </div>
    )
}

export default contact 
