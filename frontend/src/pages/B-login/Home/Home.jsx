import React from 'react'
import NavBar from '../../../components/NavBar/NavBar.jsx'
import HeroSection from '../../../components/HeroSection/HeroSection.jsx'
import bgi from '../../../assets/foto10.jpg'

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSection
        backgroundImage={bgi}
        headline="FútbolConnect"
        description="Unidos por el fútbol, conectados por la pasión"
        loginRoute="/login"
        aboutUsRoute="/aboutUs"
        loginButtonText="Iniciar sesión"
        aboutUsButtonText="Más información"
      />
    </>
  )
}

export default Home
