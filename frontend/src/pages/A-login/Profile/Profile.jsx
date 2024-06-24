import React from 'react'
import SideBar from '../../../components/SideBar/SideBar'
import ProfileSection from '../../../components/ProfileSection/ProfileSection'

const Profile = () => {
  return (
    <>
      <div className="dashboard-page">
        <SideBar />
        <ProfileSection />
      </div>
    </>
  )
}

export default Profile
