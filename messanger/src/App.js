
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Dashboard from './pages/dashboard/dash';
import { AuthProvider , AuthContext } from './authContect';
import Login from './pages/login/login';

function App() {
  
  return (
    <>
      <Router>


        {/* <nav class='navbar navbar-dark '>
          <h1>hello world</h1>
          <NavLink to='/' >home</NavLink >
          <NavLink to='/contact' >contact</NavLink >
        </nav> */}

        <Routes>

          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/about/:username" element={<About />} /> */}
          {/* <Route path="/categury" element={<Cat />} /> */}

        </Routes>


      </Router>

    </>

  );
}


function AppWithStore() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )


}
export default AppWithStore;


