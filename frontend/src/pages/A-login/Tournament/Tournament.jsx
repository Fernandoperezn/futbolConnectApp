import React from 'react'
import SideBar from '../../../components/SideBar/SideBar'
import TournamentSection from '../../../components/TornamentSection/TournamentSection'

const Tournament = () => {
  return (
    <>
      <div className="dashboard-page">
        <SideBar />
        <TournamentSection />
      </div>
    </>
  )
}

export default Tournament
