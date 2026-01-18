import { useLanguage } from '../i18n/LanguageContext';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ products, loading, error, onAddToCart }) {
  const { t } = useLanguage();

  if (loading) {
    return (
      <section className="product-section">
        <h2 className="section-title">{t('ourProducts')}</h2>
        <p className="loading-message">Loading products...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="product-section">
        <h2 className="section-title">{t('ourProducts')}</h2>
        <p className="error-message">Error: {error}</p>
      </section>
    );
  }

  return (
    <section className="product-section">
      <h2 className="section-title">{t('ourProducts')}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
