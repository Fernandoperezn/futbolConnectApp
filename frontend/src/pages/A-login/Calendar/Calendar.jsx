import React from 'react'
import SideBar from '../../../components/SideBar/SideBar'
import CalendarSection from '../../../components/CalendarSection/CalendarSection'

const Calendar = () => {
  return (
    <>
      <div className="dashboard-page">
        <SideBar />
        <CalendarSection />
      </div>
    </>
  )
}

export default Calendar
