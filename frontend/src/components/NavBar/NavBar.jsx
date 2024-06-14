import { NavLink } from 'react-router-dom'
import balonlogo from '../../assets/balon.png'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/"><img src={balonlogo} alt="Balón" style={{ width: '35px', height: '35px' }} />FutbolConnect</NavLink>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link fs-6" to="/">Inicio
                  <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aboutUs">Sobre nosotros</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contacto</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Inicia Sesión</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">Registrate</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default NavBar
