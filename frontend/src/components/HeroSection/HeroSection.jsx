import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './heroSection.css';

const HeroSection = ({
  backgroundImage,
  headline,
  description,
  loginRoute,
  aboutUsRoute,
  loginButtonText,
  aboutUsButtonText
}) => {
  const navigate = useNavigate();

  const navigateToRoute = (route) => {
    navigate(route);
  }

  return (
    <div
      className="hero-section-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-content">
        <h1 className="headline">{headline}</h1>
        <p className="description">{description}</p>
        <div className="button-group">
          <button onClick={() => navigateToRoute(loginRoute)} className="btn btn-primary">
            {loginButtonText}
          </button>
          <button onClick={() => navigateToRoute(aboutUsRoute)} className="btn btn-secondary">
            {aboutUsButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}

HeroSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  loginRoute: PropTypes.string.isRequired,
  aboutUsRoute: PropTypes.string.isRequired,
  loginButtonText: PropTypes.string.isRequired,
  aboutUsButtonText: PropTypes.string.isRequired
};

export default HeroSection;
