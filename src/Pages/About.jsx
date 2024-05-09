import React from 'react'
import { Navbar } from '../Components'
import styles from '../style'
import Hero2 from '../Components/About/Hero2'

const About = () => {
  return (
    <section>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
      </div>

      <div>
          <div className={`mt-20`}>
            <Hero2 />
          </div>
        </div>
    </section>
  )
}

export default About