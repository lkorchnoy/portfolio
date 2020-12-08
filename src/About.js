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
        I'm a Full Stack Web Developer with a passion for creativity, innovation and solving problems through analytics.
        My interest in programming began when I created my website focused on startups in the tech industry. 
        My creativity and motivation to learn as well as my past work experience in customer service has enabled me to transcend being a software engineer with the compelling desire to build projects that create impact in society. 
        I love spending time with my family I have five children, I enjoy traveling, photography, coffee and a great movie. 
     </h5>
     </AnimatePresence>
     </div>

 )
}

export default About
