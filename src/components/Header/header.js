import ImgLogo from "../../icons/logo.svg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faVk, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__logo">
            <a href="#"><img className="header__logo_img" src={ImgLogo} alt="logo"/></a>
          </div>
          <div className="header__wrapper">
            <ul className="header__menu">
              <li className="header__menu_item">Главная</li>
              <li className="header__menu_item">Автопарк</li>
              <li className="header__menu_item">Аренда</li>
              <li className="header__menu_item">Для бизнеса</li>
              <li className="header__menu_item">Контакты</li>
              <li className="header__menu_item">Личный кабинет</li>
            </ul>
            <div className="social">
              <a className="social__link"><FontAwesomeIcon icon={faFacebook}/></a>
              <a className="social__link"><FontAwesomeIcon icon={faInstagram}/></a>
              <a className="social__link"><FontAwesomeIcon icon={faVk}/></a>
              <a className="social__link"><FontAwesomeIcon icon={faWhatsapp}/></a>
            </div>
            <div className="divider"></div>
            <div className="header__phone">
              <a href="tel:89958883094">8 (800) 555-35-35</a>
            </div>
            <div className="header__download">
              <a href=""><img src="" alt="AppStore"/></a>
              <a href=""><img src="" alt="GooglePlay"/></a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;
