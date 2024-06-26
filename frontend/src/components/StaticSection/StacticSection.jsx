import React from 'react'
import Header from '../Header/Header'
import img from '../../assets/pp.jpg'

const StacticSection = () => {
  return (
    <>
      <div className="dashboard-container">
        <Header user="Fernando" imgProfile={img} titleComp="Estadisticas" />
      </div>
    </>
  )
}

export default StacticSection
