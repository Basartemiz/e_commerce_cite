import { useLanguage } from '../i18n/LanguageContext';
import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  const { language, t } = useLanguage();

  const name = language === 'tr' && product.name_tr ? product.name_tr : product.name;
  const description = language === 'tr' && product.description_tr ? product.description_tr : product.description;
  const categoryKey = product.category === 'home' ? 'homeCategory' : product.category;

  return (
    <div className="product-card">
      <img src={product.image} alt={name} className="product-image" />
      <div className="product-info">
        <span className="product-category">{t(categoryKey)}</span>
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <div className="product-footer">
          <span className="product-price">${parseFloat(product.price).toFixed(2)}</span>
          <button
            className="add-to-cart-button"
            onClick={() => onAddToCart({ ...product, name })}
          >
            {t('addToCart')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
