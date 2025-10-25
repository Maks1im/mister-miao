import Button from "../../props/Button.jsx";

const HeroSection = () => {
    return (
        <section id="aboutUs" className="hero">
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1>Мистер Мяо | Вьетнамская кухня | Сарапул</h1>
                    <h2>Мы погружаем в мир Азии наших гостей, предлагая аутентичные рецепты, собранные с самых популярных туристических направлений. Мистер Мяо - это быстрая подача блюд со 100% гарантией вкуса и качества.</h2>
                    <Button className="cta-btn">Заказать</Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;