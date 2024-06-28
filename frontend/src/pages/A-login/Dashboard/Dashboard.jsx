import React from 'react';
import SideBar from '../../../components/SideBar/SideBar';
import MainDashboard from '../../../components/MainDashboard/MainDashboard';
import pp from '../../../assets/pp.jpg';
import './dashboardPage.css';

const dashboardItems = [
  {
    title: 'Equipo',
    link: '/team',
    details: ['Serie A', '21:00, 11 November, 2020', 'Juventus vs Sassuolo']
  },
  {
    title: 'Chat del equipo',
    link: '/chat',
    details: ['PL: 8, Wins: 6, Draws: 1, Lost: 1']
  },
  {
    title: 'Calendario',
    link: '/calendar',
    details: ['1. Juventus', '2. Atalanta', '3. Inter', '4. Napoli', '5. Milan', '6. Roma']
  },
  {
    title: 'Estadisticas',
    link: '/statics',
    details: ['Possession: 65%', 'Overall price: $690.2m', 'Transfer budget: $240.6m', 'Average score: 7.2']
  },
  {
    title: 'Draft de jugadores',
    link: '/draft',
    details: ['Possession: 65%', 'Overall price: $690.2m', 'Transfer budget: $240.6m', 'Average score: 7.2']
  },
  {
    title: 'Perfil de jugador',
    link: '/profile',
    details: ['Possession: 65%', 'Overall price: $690.2m', 'Transfer budget: $240.6m', 'Average score: 7.2']
  }
];

const Dashboard = ({ userId }) => {
  return (
    <div className="dashboard-page">
      <SideBar />
      <MainDashboard
        titleComp="Dashboard"
        dashboardItems={dashboardItems}
        imgProfile={pp}
      />
    </div>
  );
};

export default Dashboard;
