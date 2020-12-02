import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faHtml5, faReact, faGithub, faCss3, faBootstrap, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faGem } from '@fortawesome/free-solid-svg-icons'


import { motion } from 'framer-motion'

function Skills() {
    
    
     return (
          <motion.div class="block"
  
        whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
              }}
        whileTap={{ scale: 0.9 }}>


        
        
         <h3>Skills</h3>
                
            
            
            
            
          <span><FontAwesomeIcon icon={faHtml5} color="red" size="3x" /></span>
          <span><FontAwesomeIcon icon={faReact} color="skyblue" size="3x" /></span>
          <span><FontAwesomeIcon icon={faJsSquare} color="yellow" size="3x" /></span>
          <span><FontAwesomeIcon icon= {faGithub} color="black" size="3x" /></span>
          <span><FontAwesomeIcon icon={faCss3} color="blue" size="3x" /></span>
          <span><FontAwesomeIcon icon={faBootstrap} color="darkmagenta" size="3x" /></span>
          <span><FontAwesomeIcon icon={faGem} color="red" size="2x" transform={{ rotate: 318 }} /></span>
           
           
        </motion.div>
            
    )}
     
            
export default Skills
  