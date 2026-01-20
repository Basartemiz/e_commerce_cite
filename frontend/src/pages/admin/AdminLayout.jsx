import { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './AdminLayout.css';

function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="admin-layout">
      <button
        className="admin-menu-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        {sidebarOpen ? '✕' : '☰'}
      </button>
      <div
        className={`admin-sidebar-overlay ${sidebarOpen ? 'overlay-visible' : ''}`}
        onClick={closeSidebar}
      />
      <aside className={`admin-sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="admin-logo">
          <h2>BB Clinic Admin</h2>
        </div>
        <nav className="admin-nav">
          <Link
            to="/admin"
            className={`admin-nav-link ${location.pathname === '/admin' ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            Dashboard
          </Link>
          <Link
            to="/admin/products"
            className={`admin-nav-link ${location.pathname.includes('/admin/products') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            Products
          </Link>
          <Link to="/" className="admin-nav-link back-link" onClick={closeSidebar}>
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
