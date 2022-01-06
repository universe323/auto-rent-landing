import ImgLogoMin from "../../../icons/logo-min.svg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faVk, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {Link} from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo"><img className="logo_min" src={ImgLogoMin} alt="min logo galeoncar"/></div>
      <div className="footer__bar">
        <Link to="/" className="footer__bar_link">Главная</Link>
        <Link to="/auto-park" className="footer__bar_link">Автопарк</Link>
        <Link to="#rent" className="footer__bar_link">Аренда</Link>
        <Link to="/for-business" className="footer__bar_link">Для бизнеса</Link>
        <Link to="/contacts" className="footer__bar_link">Контакты</Link>
        <Link to="/cabinet" className="footer__bar_link">Личный кабинет</Link>
      </div>
      <div className="footer__hr">
        <div className="footer__hr__line"/>
        <div className="footer__hr__year">
          2022 ©&nbsp;<span className="footer__hr__brand">galeoncar</span>
        </div>
      </div>
      <Link to="/policy" className="footer__privacy-policy">Политика конфиденциальности</Link>
      <div className="social_footer">
        <a href="https://facebook.com" target="_blank" className="social__link">
          <FontAwesomeIcon icon={faFacebook}/>
        </a>
        <a href="https://instagram.com" target="_blank" className="social__link">
          <FontAwesomeIcon icon={faInstagram}/>
        </a>
        <a href="https://vk.com" target="_blank" className="social__link">
          <FontAwesomeIcon icon={faVk}/>
        </a>
        <a href="https://whatsapp.com" target="_blank" className="social__link">
          <FontAwesomeIcon icon={faWhatsapp}/>
        </a>
      </div>
    </div>
  )
}
export default Footer;
