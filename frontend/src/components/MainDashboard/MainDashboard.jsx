import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './mainDashboard.css';
import Header from '../Header/Header';
import img from '../../assets/pp.jpg';

const MainDashboard = ({ dashboardItems = [], titleComp = "Dashboard" }) => {
  return (
    <div className="dashboard-container">
      <Header user="Fernando" imgProfile={img} titleComp={titleComp} />
      <div className="dashboard-content">
        <div className="dashboard-grid">
          {dashboardItems.map((item, index) => (
            <Link to={item.link} className="dashboard-item" key={index}>
              <div className="item-content">
                <h3>{item.title}</h3>
                {item.details.map((detail, detailIndex) => (
                  <p key={detailIndex}>{detail}</p>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

MainDashboard.propTypes = {
  dashboardItems: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.string).isRequired
  })).isRequired,
  titleComp: PropTypes.string
};

export default MainDashboard;
