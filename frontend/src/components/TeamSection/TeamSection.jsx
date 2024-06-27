import React from 'react';
import './teamSection.css';
import Header from '../Header/Header';
import img from '../../assets/foto11.jpg';

const TeamSection = () => {
  return (
    <>
      <div className="dashboard-container">
        <Header user="Fernando" imgProfile={img} titleComp="Tu equipo" />
        <div className="bg-[url('https://placehold.co/452x517')] bg-cover bg-center p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <div className="bg-card/70 p-4 rounded-lg">
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Club Deportivo Toluca</h3>
                <ul className="text-foreground space-y-1">
                  <li><span className="font-bold">E. Pérez 31</span> - Defensa central / Capitán</li>
                  <li><span className="font-bold">O. Bravo 01</span> - Portero</li>
                  <li><span className="font-bold">O. Pineda 04</span> - Defensa izquierda</li>
                  <li><span className="font-bold">C. Álvarez 11</span> - Medián</li>
                  <li><span className="font-bold">E. Ochoa 09</span> - Delantero</li>
                  <li><span className="font-bold">L. Aguilar 18</span> - Extrema derecha</li>
                  <li><span className="font-bold">G. Sánchez 14</span> - Extrema izquierda</li>
                </ul>
                <h4 className="text-lg font-semibold text-foreground mt-4">Suplentes:</h4>
                <ul className="text-foreground space-y-1">
                  <li><span className="font-bold">R. Tovar 12</span> - Portero</li>
                  <li><span className="font-bold">F. Beltrán 22</span> - Defensa</li>
                  <li><span className="font-bold">W. Arabe 44</span> - Delantero</li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <h3 className="text-lg font-semibold text-foreground mb-2">Alineación</h3>
                <img src={img} alt="Soccer field lineup" className="w-36 h-auto rounded shadow-lg" />
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center -mt-2 mr-2">11</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamSection;
