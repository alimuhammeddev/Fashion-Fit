import React from 'react'
import { Footer, Navbar, Reviews } from '../Components'
import styles from '../style'
import Hero2 from '../Components/About/Hero2'
import Story from '../Components/About/Story'
import Values from '../Components/About/Values'
import News from '../Components/About/News'

const About = () => {
  return (
    <section>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
      </div>

      <div>
          <div className={`lg:mt-28 mt-20`}>
            <Hero2 />
          </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Story />
          </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} bg-[#F9F3EE] lg:mt-28 mt-5 p-16`}>
          <div className={`${styles.boxWidth}`}>
            <Values />
          </div>
      </div>

      <div className='bg-[#ffffff] lg:mt-10 pb-10'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} mt-10`}>
            <Reviews />
          </div>
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} bg-[#F9F3EE] lg:mt-28 mt-5 p-16`}>
          <div className={`${styles.boxWidth}`}>
            <News />
          </div>
      </div>

      <div className='bg-[#F3E5D9] pb-8'>
        <div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About