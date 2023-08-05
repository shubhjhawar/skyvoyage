import React from 'react';

const SectionWrapper = (Component, idName) => {
  const WrapperComponent = (props) => (
    <div className="px-[100px]">
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      <Component {...props} />
    </div>
  );

  return WrapperComponent;
};

export default SectionWrapper;
