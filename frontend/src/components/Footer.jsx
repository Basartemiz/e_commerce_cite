import { useLanguage } from '../i18n/LanguageContext';
import './Footer.css';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>BB Clinic</h3>
          <p>{t('footerTagline')}</p>
        </div>
        <div className="footer-section">
          <h4>{t('quickLinks')}</h4>
          <a href="#">{t('home')}</a>
          <a href="#">{t('products')}</a>
          <a href="#">{t('about')}</a>
          <a href="#">{t('contactUs')}</a>
        </div>
        <div className="footer-section">
          <h4>{t('contactUs')}</h4>
          <p>{t('email')}: info@clinicbb.com</p>
          <p>{t('phone')}: (555) 123-4567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 BB Clinic. {t('allRightsReserved')}</p>
      </div>
    </footer>
  );
}

export default Footer;
