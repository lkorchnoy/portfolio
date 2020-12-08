import React from 'react'
import { motion } from 'framer-motion'

function Blogs() {
    return (
        
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
              
              <h3 className="title">Blogs</h3>
        </motion.div>
        
    )
}

export default Blogs
