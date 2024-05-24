import React from 'react'
import styles from '../style'
import { Footer, Navbar, Story2 } from '../Components'

const OurStory = () => {
  return (
    <section>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className='lg:px-32'>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Story2 />
                </div>
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

export default OurStory