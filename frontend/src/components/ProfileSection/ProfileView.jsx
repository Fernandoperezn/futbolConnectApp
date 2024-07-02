import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './profileView.css';
import img from '../../assets/player1.png';
import imgp from '../../assets/pp.jpg';
import Header from '../Header/Header';

const ProfileView = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate(); // Inicializa useNavigate

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

        console.log('Datos del usuario:', response.data); // Asegúrate de revisar estos datos en la consola

        // Verifica que los campos estén disponibles en la respuesta
        if (response.data.first_name && response.data.last_name) {
          setUserData(response.data);
        } else {
          console.error('Datos del usuario no contienen los campos esperados.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Cargando...</div>;
  }

  const handleEditProfileClick = () => {
    // Navega a la ruta /profile/edit
    navigate('/profile/edit');
  };

  return (
    <>
      <div className="dashboard-container">
        <Header user={userData.first_name} imgProfile={imgp} titleComp="Perfil" />
        <div className="profile-page">
          <div className="profile-card">
            <div className="profile-info-container">
              <h2 className="text-white text-2xl mb-4">Perfil del Jugador</h2>
              <div className="profile-info">
                <p><strong>Nombre:</strong> {userData.first_name}</p>
                <p><strong>Apellido:</strong> {userData.last_name}</p>
                <p><strong>Apodo:</strong> {userData.nickname}</p>
                <p><strong>Fecha de nacimiento:</strong> {userData.date_of_birth}</p>
                <p><strong>Estatura:</strong> {userData.height} cm</p>
                <p><strong>Posición:</strong> {userData.position}</p>
                <p><strong>Pie hábil:</strong> {userData.handedness === 'right' ? 'Derecho' : 'Izquierdo'}</p>
                <p><strong>Biografía:</strong> {userData.bio}</p>
                <p><strong>Teléfono:</strong> {userData.phone}</p>
                <p><strong>Capitán:</strong> {userData.captain ? 'Sí' : 'No'}</p>
                <p><strong>Edad:</strong> {userData.age} años</p>
                <button className="edit-profile-button" onClick={handleEditProfileClick}>Editar perfil</button>
              </div>
            </div>
            <div className="profile-image-container">
              <img src={img} alt="Profile" className="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileView;
