import React from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import './introSection.css'; // Importa el archivo CSS

const IntroSection = ({ imgHeader, header, text1, btnText, navTo }) => {
  return (
    <section className="header-section" style={{ backgroundImage: `url(${imgHeader})` }}>
      <div className="container">
        <div className="header-container">
          <div className="header-text">
            <h5 className="h1">{header}</h5>
            <p>{text1}</p>
            <NavLink to={navTo} className="btn btn-primary cta-button">{btnText}</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

IntroSection.propTypes = {
  imgHeader: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  navTo: PropTypes.string.isRequired
};

export default IntroSection;
