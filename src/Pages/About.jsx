import React from 'react'
import { Navbar } from '../Components'
import styles from '../style'
import Hero2 from '../Components/About/Hero2'
import Story from '../Components/About/Story'
import Values from '../Components/About/Values'

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

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Story />
          </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} bg-[#F9F3EE] lg:mt-28 mt-5`}>
          <div className={`${styles.boxWidth}`}>
            <Values />
          </div>
      </div>
    </section>
  )
}

export default About