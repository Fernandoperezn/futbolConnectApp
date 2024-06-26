import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import './calendarSection.css'
import Header from '../Header/Header'
import img from '../../assets/pp.jpg'

const CalendarSection = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <>
      <div className="dashboard-container">
        <Header user="Fernando" imgProfile={img} titleComp="Calendario" />
        <div className="calendar-container" data-theme="dark">
          <DayPicker mode="single" selected={selectedDay} onSelect={setSelectedDay} />
        </div>
      </div>
    </>
  )
}

export default CalendarSection
