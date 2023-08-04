import React from 'react';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

const Plans = () => {
    
  return (
    <a href="/Plans" className={`${styles.homeComponent}`}>
        <h1 className={`${styles.homeComponentHeading} text-red-500`}>Personalized Plans</h1>
        <p className={`${styles.homeComponentPara} -mt-[20px]`}>Tailor your travel experience to perfection with our personalized travel planning services. Whether you're a solo traveler seeking adventure, a couple planning a romantic getaway, or a family looking for a memorable vacation, we've got you covered. Let us create a customized itinerary that fulfills your travel dreams.</p>
        <button
          type="button"
          className={`${styles.homeButton}`}
        >
          Click here to tailor a Plan
        </button>

    </a>

  )
}

export default SectionWrapper(Plans, "plans");