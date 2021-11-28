import React from 'react';
import './App.css';
import Login from './Componentes/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import AdminPage from './pages/Admin/Admin';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;