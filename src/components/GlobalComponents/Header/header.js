import ImgLogo from "../../../icons/logo.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faVk, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import AppStore from "../../../icons/Social/App Store.svg"
import PlayMarket from "../../../icons/Social/Google play.svg"
import {Link} from "react-router-dom";


const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link to="/" className="header__logo">
            <img className="header__logo_img" src={ImgLogo} alt="logo"/>
          </Link>
          <div className="header__wrapper">
            <div className="header__wrapper_up">
              <ul className="header__menu">
                <li className="header__menu_item"><Link to="/">Главная</Link></li>
                <li className="header__menu_item"><Link to="/auto-park">Автопарк</Link></li>
                <li className="header__menu_item"><Link to="#">Аренда</Link></li>
                <li className="header__menu_item"><Link to="/for-business">Для бизнеса</Link></li>
                <li className="header__menu_item"><Link to="/contacts">Контакты</Link></li>
                <li className="header__menu_item"><Link to="/cabinet">Личный кабинет</Link></li>
              </ul>
              <div className="header__social">
                <a href="https://facebook.com" target="_blank" className="header__social_link"><FontAwesomeIcon icon={faFacebook}/></a>
                <a href="https://instagram.com" target="_blank" className="header__social_link"><FontAwesomeIcon icon={faInstagram}/></a>
                <a href="https://vk.com" target="_blank" className="header__social_link"><FontAwesomeIcon icon={faVk}/></a>
                <a href="https://whatsapp.com" target="_blank" className="header__social_link"><FontAwesomeIcon icon={faWhatsapp}/></a>
              </div>
            </div>
            <div className="header__divider"/>
            <div className="header__wrapper_down">
              <div className="header__phone">
                <a href="tel:89958883094">8 (800) 555-35-35</a>
              </div>
              <div className="header__download">
                <a href="https://www.apple.com/ua/app-store/"><img src={AppStore} alt="AppStore"/></a>
                <a href="https://play.google.com/store"><img src={PlayMarket} alt="GooglePlay"/></a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;
