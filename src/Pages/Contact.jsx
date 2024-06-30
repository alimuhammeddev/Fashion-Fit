import React from 'react'
import styles from '../style'
import { Footer, Navbar } from '../Components'
import Hero3 from '../Components/Contact Us/Hero3'

const Contact = () => {
  return (
    <section>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div>
          <div className={`lg:mt-28 mt-20`}>
            <Hero3 />
          </div>
        </div>

        <div className='bg-[#F3E5D9] pb-8 mt-10'>
            <div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact