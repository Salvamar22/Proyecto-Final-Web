import React from 'react';
import './App.css';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import UserPage from './Pages/UserPage/UserPage';
import AdminPage from './Pages/Admin/Admin';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
