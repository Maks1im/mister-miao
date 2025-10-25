import logo from "../../assets/images/logo.png"

const Header = ({ toggleMenu }) => {
    return (
        <header className="header">
            <div className="header-main">
                <button onClick={toggleMenu} className="btn-burger-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" fill="currentColor" className="bi bi-list"
                         viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                    Меню
                </button>
                <a href="" className="link-logo-header">
                    <img src={logo} alt="logo" className="img-logo-header"/>
                </a>
            </div>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li><a href="#aboutUs">О нас</a></li>
                    <li><a href="#NewItems">Новинки</a></li>
                    <li><a href="#footer">Контакты</a></li>
                </ul>
            </nav>
            <div className="info-header">+7 919 905-53-19</div>
        </header>
    );
};

export default Header;