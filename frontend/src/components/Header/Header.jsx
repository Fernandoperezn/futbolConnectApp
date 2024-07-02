import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./header.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Header = ({ welcome, imgProfile, titleComp }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        const userId = decodedToken.id;

        const response = await axios.get(`http://localhost:3000/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h1 className="title-comp">{titleComp}</h1>
      </div>
      <div className="header-right">
        <div className="notification-icon" role="button" aria-label="Notificaciones">🔔</div>
        <NavLink to="/profile" className="user-info">
          <img src={imgProfile} alt="User" className="user-photo" />
          {/* Mostrar el nombre del usuario si está disponible */}
          <span>{userData ? userData.first_name : 'Cargando...'}</span>
        </NavLink>
      </div>
    </header>
  );
};

Header.propTypes = {
  welcome: PropTypes.string, // Opción adicional si decides usarla
  imgProfile: PropTypes.string.isRequired,
  titleComp: PropTypes.string.isRequired
};

export default Header;
