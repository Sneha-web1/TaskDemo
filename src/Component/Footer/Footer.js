import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";
import Logo from "../../Assets/logo.png";

const Footer = () => {
  return (
    <MDBFooter className=" text-lg-start bgColor">
      <MDBContainer className="p-3">
        <MDBRow>
          {/* Logo and Description Section */}
          <MDBCol lg="6" md="12" className="mb-4">
            <img src={Logo} alt="Taskpules Logo" className="logo-footer mb-3" />
            <p className="footer-description">
            The TaskPulse empowers SMBs with tailored solutions and expert services to drive success and innovation.
            </p>
          </MDBCol>

          {/* Contact Information Section */}
          <MDBCol lg="6" md="12" className="mb-4 mt-lg-5 ">
            <h5 className="text-uppercase fw-bold mb-lg-5">Contact Us</h5>
            <p className="footer-contact">
              <FaMapMarkerAlt className="me-2" />
              2nd floor, NS Complex, Nelamangala, Bangalore - 562123
            </p>
            <p className="footer-contact">
              <FaEnvelope className="me-2" />
              support@taskpules.in
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;