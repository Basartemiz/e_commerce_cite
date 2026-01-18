import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../../config';
import './ProductForm.css';

const CATEGORIES = [
  { value: 'electronics', label: 'Electronics' },
  { value: 'sports', label: 'Sports' },
  { value: 'accessories', label: 'Accessories' },
  { value: 'home', label: 'Home' },
];

function ProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    name: '',
    name_tr: '',
    description: '',
    description_tr: '',
    price: '',
    image: '',
    category: 'electronics',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    if (isEditing) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`${API_URL}/products/${id}/`);
      if (!response.ok) throw new Error('Product not found');
      const data = await response.json();
      setFormData({
        name: data.name,
        name_tr: data.name_tr || '',
        description: data.description,
        description_tr: data.description_tr || '',
        price: data.price,
        image: data.image,
        category: data.category,
      });
      setImagePreview(data.image);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'image') {
      setImagePreview(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const url = isEditing
        ? `${API_URL}/products/${id}/`
        : `${API_URL}/products/`;
      const method = isEditing ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
      }

      navigate('/admin/products');
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="product-form-page">
      <h1>{isEditing ? 'Edit Product' : 'Add New Product'}</h1>

      {error && <div className="form-error">{error}</div>}

      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-grid">
          <div className="form-section">
            <h3>Basic Information</h3>

            <div className="form-group">
              <label htmlFor="name">Product Name (English) *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter product name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="name_tr">Product Name (Turkish)</label>
              <input
                type="text"
                id="name_tr"
                name="name_tr"
                value={formData.name_tr}
                onChange={handleChange}
                placeholder="Urun adini girin"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description (English) *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Enter product description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description_tr">Description (Turkish)</label>
              <textarea
                id="description_tr"
                name="description_tr"
                value={formData.description_tr}
                onChange={handleChange}
                rows="4"
                placeholder="Urun aciklamasini girin"
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Pricing & Category</h3>

            <div className="form-group">
              <label htmlFor="price">Price ($) *</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                placeholder="0.00"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="image">Image URL *</label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
                placeholder="https://example.com/image.jpg"
              />
              <small className="form-hint">
                Tip: Use https://picsum.photos/seed/yourword/300/300 for placeholder images
              </small>
            </div>

            {imagePreview && (
              <div className="image-preview">
                <label>Image Preview</label>
                <img
                  src={imagePreview}
                  alt="Preview"
                  onError={() => setImagePreview('')}
                />
              </div>
            )}
          </div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            onClick={() => navigate('/admin/products')}
            className="cancel-button"
          >
            Cancel
          </button>
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Saving...' : isEditing ? 'Update Product' : 'Create Product'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
