import React from 'react'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'

const Extra = (props) => {
    console.log(props.heading);
  return (
    <div className={`${styles.pageLayout}`}>
        <div className='w-full h-full'>
            <h1 className="font-extrabold text-[60px] underline m-2 p-2 flex flex-row items-center justify-center">{props.heading}</h1>
            <p className="m-2 p-2 text-[20px]">{props.subpara1}</p>
            <p className="m-2 p-2 text-[20px]">{props.subpara2}</p>
            <p className="m-2 p-2 text-[20px]">{props.subpara3}</p>
            <p className="m-2 p-2 text-[20px]">{props.subpara4}</p>
            <p className="m-2 p-2 text-[20px]">{props.subpara5}</p>
        </div>
    </div>
  )
}

export default SectionWrapper(Extra, "");
// export default Extra;
