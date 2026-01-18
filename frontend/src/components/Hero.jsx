import { useLanguage } from '../i18n/LanguageContext';
import './Hero.css';

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{t('heroTitle')}</h1>
        <p>{t('heroSubtitle')}</p>
        <button className="hero-button">{t('shopNow')}</button>
      </div>
    </section>
  );
}

export default Hero;
