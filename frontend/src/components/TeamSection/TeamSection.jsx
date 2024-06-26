import React from 'react'
import Header from '../Header/Header'
import img from '../../assets/pp.jpg'

const TeamSection = () => {
  return (
    <>
      <div className="dashboard-container">
        <Header user="Fernando" imgProfile={img} titleComp="Tu equipo" />
      </div>
    </>
  )
}

export default TeamSection
