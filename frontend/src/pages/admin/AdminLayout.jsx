import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './AdminLayout.css';

function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <h2>ShopEase Admin</h2>
        </div>
        <nav className="admin-nav">
          <Link
            to="/admin"
            className={`admin-nav-link ${location.pathname === '/admin' ? 'active' : ''}`}
          >
            Dashboard
          </Link>
          <Link
            to="/admin/products"
            className={`admin-nav-link ${location.pathname.includes('/admin/products') ? 'active' : ''}`}
          >
            Products
          </Link>
          <Link to="/" className="admin-nav-link back-link">
            Back to Store
          </Link>
          <button onClick={handleLogout} className="admin-nav-link logout-button">
            Logout
          </button>
        </nav>
      </aside>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
