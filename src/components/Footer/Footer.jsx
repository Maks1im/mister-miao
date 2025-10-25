import map from "../../assets/images/map.jpg.webp"
import mir from "../../assets/images/mir.webp"
import viza from "../../assets/images/viza.webp"
import masstercard from "../../assets/images/mastercard.webp"
import jsb from "../../assets/images/jsb.webp"


const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <h2>Приходите в гости</h2>
            <div className="footer-info">
                <div className="footer-location">
                    <p>
                        <img src={map} alt="map"/>
                        г. Сарапул, ул. Раскольникова 115, <br/> цокольный этаж.
                    </p>
                    <p>
                        Режим работы: <br/>
                        ПН-ВС с 10:00 до 22:00 <br/>
                        Прием заказов <br/>
                        с 10:00 до 21:30
                    </p>
                </div>
                <div className="footer-pay">
                    <h3>Способы оплты</h3>
                    <div className="pay-img">
                        <img src={mir} alt="pay"/>
                        <img src={viza} alt="pay"/>
                        <img src={masstercard} alt="pay"/>
                        <img src={jsb} alt="pay"/>
                    </div>
                    <a href="/">Политика конфиденциальности</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;