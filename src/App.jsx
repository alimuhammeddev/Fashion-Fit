import styles from './style'
import { Collection, Hero, Navbar,} from './Components';

const App = () =>
  (
    <div className='bg-white w-full overflow-hidden text-black'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>


      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} mt-36`}>
          <Hero />
        </div>
      </div>

      <div className='bg-[#F9F3EE] mt-20'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} mt-36`}>
            <Collection />
          </div>
        </div>
      </div>
    </div>
  );


export default App