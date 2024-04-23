import styles from './style'
import { Hero, Navbar,} from './Components';

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
    </div>
  );


export default App