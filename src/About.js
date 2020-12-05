import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'




function About() {
    return (
      <div class="container">
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
              
              <h3 className="title">About Me</h3>
        </motion.div>
        <AnimatePresence>
      <h5>
        I'm a Full Stack Web Developer.
        I love building high technology projects that are aesthetically beautiful and user friendly.
        I love coffee, a great movie, traveling, photography and spending time with my family. 
     </h5>
     </AnimatePresence>
     </div>

 )
}

export default About
