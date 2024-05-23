import React from 'react'
import styles from '../style'
import { Navbar, Story2 } from '../Components'

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
    </section>
  )
}

export default OurStory