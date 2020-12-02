import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

function Contact() {
    return (
        <motion.div class="block"
  
        whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
              }}
        whileTap={{ scale: 0.9 }}>
        
            <h3>Let's Chat</h3>
            <i class="fab falinkedin"></i>
            <span><FontAwesomeIcon icon={faLinkedin} color="grey" size="5x" /></span>
            <span><FontAwesomeIcon icon={faGithub} color="grey" size="5x" /></span>
            <span><FontAwesomeIcon icon={faMedium} color="grey" size="5x" /></span>
            <span><FontAwesomeIcon icon={faEnvelope} color="grey" size="5x" /></span>
            <span><FontAwesomeIcon icon={faDownload} color="grey" size="5x" /></span>
            <span><FontAwesomeIcon icon={faYoutube} color="grey" size="5x" /></span>
        </motion.div>
    )
}

export default Contact
