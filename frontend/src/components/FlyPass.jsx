import React from 'react';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { Link } from 'react-router-dom';

const FlyPass = () => {
    
  return (
    <Link to="/flypass" className={`${styles.homeComponent}`}>
        <h1 className={`${styles.homeComponentHeading} text-red-500`}>FlyPass</h1>
        <p className={`${styles.homeComponentPara} -mt-[20px]`}>With Fly Pass, you're no longer confined to the ground. Soar like a bird, embrace the wind, and set yourself free in the vast blue expanse. Whether it's exploring hidden gems or visiting iconic landmarks, your next adventure awaits you high above the clouds. Drinks on us!</p>
        <button
          type="button"
          className={`${styles.homeButton}`}
        >
          Click here to buy the FLYPASS
        </button>

    </Link>

  )
}

export default SectionWrapper(FlyPass, "flypass");