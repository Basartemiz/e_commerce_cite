import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config';
import './Dashboard.css';

function Dashboard() {
  const [stats, setStats] = useState({ totalProducts: 0 });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch(`${API_URL}/products/`);
      const products = await response.json();
      setStats({ totalProducts: products.length });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Products</h3>
          <p className="stat-number">{stats.totalProducts}</p>
          <Link to="/admin/products" className="stat-link">
            View all products
          </Link>
        </div>
        <div className="stat-card">
          <h3>Quick Actions</h3>
          <div className="quick-actions">
            <Link to="/admin/products/new" className="action-button">
              Add New Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
