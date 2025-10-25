import Card from "../../props/Card.jsx";
import imgDishes from "../../assets/images/logo.png"
import data from "../../data/dishes.json"

const NewItems = () => {
    return (
        <div id="NewItems" className="NewItems">
            <h1>Новинки</h1>
            <hr/>
            <div className="dishes">
                {data.soups.map((item) => (
                    <Card key={item.id}>
                        <img src={imgDishes} alt="img-dishes" className="img-dishes" />
                        <h3>{item.name}</h3>
                        <p>{item.price} {item.currency}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default NewItems;