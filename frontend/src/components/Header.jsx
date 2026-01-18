import { useLanguage } from '../i18n/LanguageContext';
import logo from '../assets/logo.svg';
import './Header.css';

function Header({ cartCount, onCartClick }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo">
          <img src={logo} alt="ShopEase" className="logo-img" />
        </a>
        <nav className="nav">
          <a href="#" className="nav-link">{t('home')}</a>
          <a href="#" className="nav-link">{t('products')}</a>
          <a href="#" className="nav-link">{t('about')}</a>
        </nav>
        <div className="header-actions">
          <select
            className="language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="tr">TR</option>
          </select>
          <button className="cart-button" onClick={onCartClick}>
            {t('cart')} ({cartCount})
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
