import Button from "./Button.jsx";

const Card = ({ children }) => {
    return (
        <div className="card-dishes">
            <a href="">{children}</a>
            <Button className="btn-card">Подробнее</Button>
            <Button className="btn-card">В корзину</Button>
        </div>
    );
};

export default Card;