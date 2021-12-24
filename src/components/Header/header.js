import ImgLogo from "../../icons/logo.svg"

const Header = () => {
  return(
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
                    <div className="header__social">
                        <a href="#"><img src="" alt="FaceBook"/></a>
                        <a href="#"><img src="" alt="Instagram"/></a>
                        <a href="#"><img src="" alt="Vk"/></a>
                        <a href="#"><img src="" alt="WhatsApp"/></a>
                    </div>
                    <div className="divider"></div>
                    <div className="header__phone">
                        <a href="tel:89958883094">8 (995) 888-30-94</a>
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