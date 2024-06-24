import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './sideBar.css'
import iconomundo from '../../assets/icono-mundo.png'

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar el token de localStorage o cookies
    localStorage.removeItem('token');
    localStorage.removeItem('token');

    // Redirigir al usuario a la página de inicio de sesión
    navigate('/login');
  };

  const menuItems = [
    { to: '/dashboard', text: 'Página principal' },
    { to: '/team', text: 'Equipo' },
    { to: '/chat', text: 'Chat' },
    { to: '/calendar', text: 'Calendario' },
    { to: '/statics', text: 'Estadísticas' },
    { to: '/tournament', text: 'Torneos' },
    { to: '/profile', text: 'Perfil' },
    { to: '/settings', text: 'Configuración' }
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={iconomundo} alt="Logo" className="logo-image" />
        <span className="logo-text">FútbolConnect</span>
      </div>
      <ul className="list">
        {menuItems.map((item, index) => (
          <li className="list-item" key={index}>
            <NavLink
              className={({ isActive }) => `nav-link fs-6${isActive ? ' active' : ''}`}
              to={item.to}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
        <li className="list-item">
          <button className="nav-link fs-6 button-logout" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </li>
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  // Puedes añadir PropTypes si el componente recibe props
};

export default Sidebar;
