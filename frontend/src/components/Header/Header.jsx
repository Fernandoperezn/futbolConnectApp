import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./header.css";

const Header = ({ welcome, user, imgProfile, titleComp }) => {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h1 className="title-comp">{titleComp}</h1>
      </div>
      <div className="header-right">
        <div className="notification-icon" role="button" aria-label="Notificaciones">🔔</div>
        <NavLink to="/profile" className="user-info">
          <img src={imgProfile} alt="User" className="user-photo" />
          <span>{user}</span>
        </NavLink>
      </div>
    </header>
  );
};

Header.propTypes = {
  imgProfile: PropTypes.string.isRequired,
  titleComp: PropTypes.string.isRequired
};

export default Header;
