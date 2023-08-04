import React from 'react';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

const Deal = () => {
    
  return (
    <div className={`${styles.homeComponent}`}>
        <h1 className={`${styles.homeComponentHeading} text-red-500`}>Deal</h1>
        <p className={`${styles.homeComponentPara} -mt-[20px]`}>This is your chance to get a limited time exclusive discount of 20% on any flights going to Europe, this Fall</p>
        <div class="marquee-container">
            <div class="marquee flex">
                <img src="image1.jpg" alt="Image 1" class="w-48 h-auto mr-4" />
                <img src="image2.jpg" alt="Image 2" class="w-48 h-auto mr-4" />
                <img src="image3.jpg" alt="Image 3" class="w-48 h-auto mr-4" />
                {/* <!-- Add more images as needed --> */}
            </div>
        </div>

    </div>

  )
}

export default SectionWrapper(Deal, "deal");