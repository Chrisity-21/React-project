import { Link } from "react-router-dom";

function MenuCard({dish, onAddToCart}){
    return(
        <div className="menu-card">
            <img src={dish.image} alt={dish.name} width="300" />
            <Link to={`/menu/${dish.id}`}>
            <h1> {dish.name} </h1>
            </Link>
            <p>{dish.price} </p>
            <p>{dish.category} </p>
            <button
              onClick={()=>onAddToCart(dish)}> Add to Cart
                </button>
        </div>
    )
}
export default MenuCard;