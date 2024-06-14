import React from 'react'
import IntroSection from '../../../components/IntroSection/IntroSection'
import NavBar from '../../../components/NavBar/NavBar'
import img1 from '../../../assets/foto6.jpg'

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <IntroSection
        imgHeader={img1}
        header="Bienvenido a FútbolConnect"
        text1="Únete a la mejor comunidad de fútbol y encuentra equipos y torneos cerca de ti."
        btnText="Contacto"
        navTo="/contact"
      />
    </>
  )
}

export default AboutUs
