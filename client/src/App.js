import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Auth/Login';
import UserRegistration from './components/pages/Auth/UserRegistration';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import UserDashboard from './components/Dashboard/UserDashboard';
import UserHome from './components/pages/User/UserHome';
import UserEvents from './components/pages/User/UserEvents';
import UserPosts from './components/pages/User/UserPosts';
import UserNotices from './components/pages/User/UserNotices';
import UserProfile from './components/pages/User/UserProfile';
import AdminNewRegister from './components/pages/Admin/AdminNewRegister';
import AdminSearchUsers from './components/pages/Admin/AdminSearchUsers';
import AdminHome from './components/pages/Admin/AdminHome';
import AdminSendEmails from './components/pages/Admin/AdminSendEmails';
import AdminProfile from './components/pages/Admin/AdminProfile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/userregister" element={<UserRegistration />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/userevents" element={<UserEvents />} />
          <Route path="/userposts" element={<UserPosts />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/usernotices" element={<UserNotices />} />
          <Route path="/adminnewregister" element={<AdminNewRegister />} />
          <Route path="/adminsearch" element={<AdminSearchUsers />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/adminsendemails" element={<AdminSendEmails />} />
          <Route path="/adminprofile" element={<AdminProfile />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
