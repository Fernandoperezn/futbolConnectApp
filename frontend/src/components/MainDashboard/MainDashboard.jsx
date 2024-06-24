import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './mainDashboard.css';
import useFetchUser from '../../hooks';

const MainDashboard = ({ userId, imgProfile, dashboardItems = [], titleComp }) => {
  const { user, loading, error } = useFetchUser(userId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="welcome-message">
          <h2>Bienvenido {user.first_name} 👋</h2>
        </div>
        <div className="header-right">
          <div className="notification-icon" role="button" aria-label="Notificaciones">🔔</div>
          <NavLink to="/profile" className="user-info">
            <img src={imgProfile} alt="User" className="user-photo" />
            <span>{}</span>
          </NavLink>
        </div>
      </header>
      <h1>{titleComp}</h1>
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
  username: PropTypes.string,
  dashboardItems: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.string).isRequired
  })).isRequired,
  titleComp: PropTypes.string.isRequired
};

export default MainDashboard;
