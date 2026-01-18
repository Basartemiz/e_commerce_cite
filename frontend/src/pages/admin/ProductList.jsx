import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config';
import './ProductList.css';

function AdminProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/products/`);
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/products/${id}/`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setProducts(products.filter((p) => p.id !== id));
        setDeleteConfirm(null);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (loading) {
    return <div className="admin-loading">Loading products...</div>;
  }

  return (
    <div className="admin-product-list">
      <div className="admin-header">
        <h1>Products</h1>
        <Link to="/admin/products/new" className="add-button">
          + Add Product
        </Link>
      </div>

      <div className="products-table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-thumbnail"
                  />
                </td>
                <td>
                  <div className="product-name">{product.name}</div>
                  <div className="product-name-tr">{product.name_tr}</div>
                </td>
                <td>
                  <span className="category-badge">{product.category}</span>
                </td>
                <td className="price-cell">${parseFloat(product.price).toFixed(2)}</td>
                <td>
                  <div className="action-buttons">
                    <Link
                      to={`/admin/products/edit/${product.id}`}
                      className="edit-button"
                    >
                      Edit
                    </Link>
                    {deleteConfirm === product.id ? (
                      <div className="delete-confirm">
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="confirm-yes"
                        >
                          Yes
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(null)}
                          className="confirm-no"
                        >
                          No
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setDeleteConfirm(product.id)}
                        className="delete-button"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {products.length === 0 && (
        <div className="no-products">
          <p>No products found.</p>
          <Link to="/admin/products/new">Add your first product</Link>
        </div>
      )}
    </div>
  );
}

export default AdminProductList;
