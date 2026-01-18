import { useLanguage } from '../i18n/LanguageContext';
import './Cart.css';

function Cart({ items, onClose, onRemove, onUpdateQuantity }) {
  const { t } = useLanguage();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>{t('shoppingCart')}</h2>
          <button className="close-button" onClick={onClose}>X</button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <p className="empty-cart">{t('emptyCart')}</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button
                  className="remove-button"
                  onClick={() => onRemove(item.id)}
                >
                  {t('remove')}
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>{t('total')}:</span>
              <span className="total-amount">${total.toFixed(2)}</span>
            </div>
            <button className="checkout-button">{t('proceedToCheckout')}</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
