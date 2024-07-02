import React from 'react'
import SideBar from '../../../components/SideBar/SideBar'
import ProfileView from '../../../components/ProfileSection/ProfileView'

const Profile = () => {
  return (
    <>
      <div className="dashboard-page">
        <SideBar />
        <ProfileView />
      </div>
    </>
  )
}

export default Profile
