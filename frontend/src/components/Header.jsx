import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import logo from '../assets/logo.svg';
import './Header.css';

function Header({ cartCount, onCartClick }) {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo">
          <img src={logo} alt="BB Clinic" className="logo-img" />
        </a>
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#" className="nav-link" onClick={() => setMenuOpen(false)}>{t('home')}</a>
          <a href="#" className="nav-link" onClick={() => setMenuOpen(false)}>{t('products')}</a>
          <a href="#" className="nav-link" onClick={() => setMenuOpen(false)}>{t('about')}</a>
          <a href="/admin" className="nav-link" onClick={() => setMenuOpen(false)}>{t('admin')}</a>
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
