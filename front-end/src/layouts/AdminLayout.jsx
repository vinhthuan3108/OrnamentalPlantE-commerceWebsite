import { Outlet } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar'; 
import Footer from '../components/common/Footer';
import HeaderAdmin from '../components/common/HeaderAdmin'; 

function AdminLayout() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>

      <div style={{ width: '260px', flexShrink: 0 }}>
        <Sidebar />
      </div>

      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: '#f4f7f6', 
        overflowX: 'hidden'
      }}>
        

        <HeaderAdmin />


        <main style={{ flex: 1, padding: '30px' }}>
          <Outlet />
        </main>


        <Footer />
      </div>
    </div>
  );
}

export default AdminLayout;