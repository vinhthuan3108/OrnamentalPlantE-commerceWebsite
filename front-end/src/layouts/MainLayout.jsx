// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import FloatingContact from '../components/client/FloatingContact';
import './MainLayout.css';
function MainLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      <Header />

      <div style={{ flex: 1, backgroundColor: '#f5f5f5', paddingBottom: '30px' }}>
        <Outlet />
      </div>

      <Footer />
      <FloatingContact />
    </div>
  );
}

export default MainLayout;