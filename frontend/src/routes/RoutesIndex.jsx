import { Routes, Route } from 'react-router-dom'
import { Calendar, Chat, Dashboard, Profile, Settings, Statics, Team, Tournament, AboutUs, Contact, Home, Login, SignUp } from '../pages'
import ProfileSection from '../components/ProfileSection/ProfileSection'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/statics" element={<Statics />} />
      <Route path="/tournament" element={<Tournament />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/profile/edit" element={<ProfileSection />} />

    </Routes>
  )
}

export default RoutesIndex
