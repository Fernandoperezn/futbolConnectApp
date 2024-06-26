import React from 'react'
import Header from '../Header/Header'
import img from '../../assets/pp.jpg'

const TournamentSection = () => {
  return (
    <>
      <div className="dashboard-container">
        <Header user="Fernando" imgProfile={img} titleComp="Torneos disponibles" />
      </div>
    </>
  )
}

export default TournamentSection
