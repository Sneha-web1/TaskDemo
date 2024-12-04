import React from "react";
import "./Heading.css";
const Heading = ({ title }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div>
            <div className="heading">
              <h1 className="heading-title mt-4">{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
