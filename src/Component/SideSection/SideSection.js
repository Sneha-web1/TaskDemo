import React from 'react';
import './SideSection.css';

const SideSection = ({ img, heading, title }) => {
  return (
    <>
      <div className="col-lg-6">
        <div className="text-center">
          <div className="side-section">
            <img src={img} alt="Service" className="side-section-img" />
            <h4>{title}</h4> {/* Use the title prop */}
            <p>{heading}</p> {/* Use the heading prop */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideSection;
