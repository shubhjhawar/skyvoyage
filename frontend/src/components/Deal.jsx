import React from 'react';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { image1, image2, image3, image4, image5 } from '../assets';
import { Link } from 'react-router-dom';

const Deal = () => {
  return (
    <Link to="/deal" className={`${styles.homeComponent}`}>
        <h1 className={`${styles.homeComponentHeading} text-red-500`}>Deal</h1>
        <p className={`${styles.homeComponentPara} -mt-[20px]`}>This is your chance to get a limited time exclusive discount of 20% on any flights going to Europe, this Fall</p>
        <div className="marquee-container">
            <div className="marquee flex ">
                <img src={image1} alt="Image 1" className={`${styles.marqueePictures}`}/>
                <img src={image2} alt="Image 2" className={`${styles.marqueePictures}`}/>
                <img src={image3} alt="Image 3" className={`${styles.marqueePictures}`}/>
                <img src={image4} alt="Image 3" className={`${styles.marqueePictures}`}/>
                <img src={image5} alt="Image 3" className={`${styles.marqueePictures}`} />
            </div>
        </div>
        <button
          type="button"
          className={`${styles.homeButton}`}
        >
          Click here to get the deal
        </button>

    </Link>

  )
}

export default SectionWrapper(Deal, "deal");