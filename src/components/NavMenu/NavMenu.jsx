const NavMenu = ({ isOpen }) => {
    return (
        <>
            <nav className={`nav-menu ${isOpen ? 'nav-menu--open' : ''}`}>
                <ul className="nav-menu-list">
                    <li><a href="/">Супы</a></li>
                    <li><a href="/">Вторые блюда</a></li>
                    <li><a href="/">Wok</a></li>
                    <li><a href="/">Онигири</a></li>
                    <li><a href="/">Закуски</a></li>
                    <li><a href="/">Десерты</a></li>
                    <li><a href="/">Бизнес-ланчи</a></li>
                    <li><a href="/">Напитки</a></li>
                    <li><a href="/">Сеты</a></li>
                    <li><a href="/">Роллы</a></li>
                    <li><a href="/">Суши</a></li>
                    <li><a href="/">Японская пицца</a></li>
                </ul>
            </nav>
        </>
    );
};

export default NavMenu;