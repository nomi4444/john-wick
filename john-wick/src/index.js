import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import MainPage from './MainPage';
import Footer from './Aooter';
import Slidebar from './Slidebar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <MainPage/>
    <Footer/>
    <Slidebar/>
    
    
    
  </React.StrictMode>
);







