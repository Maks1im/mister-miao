import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import NavMenu from "../NavMenu/NavMenu.jsx";
import {useState} from "react";

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <Header toggleMenu={toggleMenu} />
            <main className="content-wrapper">
                <NavMenu isOpen={isMenuOpen} />
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;