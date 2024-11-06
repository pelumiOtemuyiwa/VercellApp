import './App.css'
import { ToastContainer} from 'react-toastify';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListImage from './component/user/listImage';
import ModalPage from './component/user/ModalPage';

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListImage />} ></Route>
          <Route path="/modalpage/:id" element={<ModalPage/>} ></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App
