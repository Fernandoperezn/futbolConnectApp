import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profileSection.css';
import img from '../../assets/foto2.jpg';
import imgp from '../../assets/pp.jpg';
import Header from '../Header/Header';

const ProfileSection = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    nickname: '',
    date_of_birth: '',
    height: '',
    position: '',
    handedness: '',
    bio: '',
    phone: '',
    captain: false,
    age: ''
  });
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        const userId = decodedToken.id;
        setUserId(userId);

        const response = await axios.get(`http://localhost:3000/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const data = response.data;
        setFormData({
          first_name: data.first_name || '',
          last_name: data.last_name || '',
          nickname: data.nickname || '',
          date_of_birth: data.date_of_birth || '',
          height: data.height || '',
          position: data.position || '',
          handedness: data.handedness || 'right',
          bio: data.bio || '',
          phone: data.phone || '',
          captain: data.captain || false,
          age: data.age || ''
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value || ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      console.log('Datos a enviar:', formData); // Log para ver los datos actualizados
      await axios.put(`http://localhost:3000/api/users/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Perfil actualizado correctamente');
    } catch (error) {
      console.error('Error actualizando el perfil:', error);
      alert('Error actualizando el perfil');
    }
  };

  return (
    <>
      <div className="dashboard-container">
        <Header user="Fernando" imgProfile={imgp} titleComp="Perfil" />
        <div className="profile-page">
          <div className="profile-card">
            <div className="profile-form-container">
              <h2 className="text-white text-2xl mb-4">Perfil</h2>
              <form className="profile-form" onSubmit={handleSubmit}>
                <div>
                  <label>Nombre:</label>
                  <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
                </div>
                <div>
                  <label>Apellido:</label>
                  <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
                </div>
                <div>
                  <label>Apodo:</label>
                  <input type="text" name="nickname" value={formData.nickname} onChange={handleChange} />
                </div>
                <div>
                  <label>Fecha de nacimiento:</label>
                  <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} required />
                </div>
                <div>
                  <label>Estatura:</label>
                  <input type="number" name="height" value={formData.height} onChange={handleChange} required />
                </div>
                <div>
                  <label>Posición:</label>
                  <input type="text" name="position" value={formData.position} onChange={handleChange} required />
                </div>
                <div>
                  <label>Pie:</label>
                  <select name="handedness" value={formData.handedness} onChange={handleChange}>
                    <option value="right">Right</option>
                    <option value="left">Left</option>
                  </select>
                </div>
                <div>
                  <label>Biografía:</label>
                  <textarea name="bio" value={formData.bio} onChange={handleChange} />
                </div>
                <div>
                  <label>Teléfono:</label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div>
                  <label>Capitán:</label>
                  <input type="checkbox" name="captain" checked={formData.captain} onChange={handleChange} />
                </div>
                <div>
                  <label>Edad:</label>
                  <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                </div>
                <button type="submit">Actualizar Perfil</button>
              </form>
            </div>
            <div className="profile-image-container">
              <img src={img} alt="Profile Image" className="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSection;
