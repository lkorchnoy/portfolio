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
              
              <h3 className="title">About Me</h3><br></br>
        </motion.div>
        <AnimatePresence>
      <h5>
        My interest in programming began when I created my website focused on startups in the tech industry. I love technology and it's latest developments.
        With strong problem-solving skills and my background in customer experience, I'm passionate about creating high performance projects with clean, beautiful code and user-friendly.
        I have five children and I love spending time with my family. I also enjoy traveling, photography and a great movie. 
     </h5>
     </AnimatePresence>
     </div>

 )
}

export default About
