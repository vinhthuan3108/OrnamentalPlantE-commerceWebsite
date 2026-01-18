import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
  // Lấy user từ localStorage 
  const user = JSON.parse(localStorage.getItem('user'));

  //Chưa đăng nhập -> Về trang Login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  //Có đăng nhập nhưng sai quyền -> Về trang chủ
  if (allowedRoles && !allowedRoles.includes(user.roleId)) {

    alert("Bạn không có quyền truy cập trang này!");
    return <Navigate to="/" replace />; 
  }

  //Hợp lệ ->đi tiếp
  return <Outlet />;
};

export default ProtectedRoute;