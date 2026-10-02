import { Dish } from "./types";
import Link from "next/link";
  type MenuCardProps = {
    dish: Dish;
  };

  export default function MenuCard({ dish }: MenuCardProps) {
    return (
      <div>
         <img
        src={dish.image}
        alt={dish.name}
        width={300}
      />
        <h2>{dish.name}</h2>
        <p>Cuisine: {dish.cuisine}</p>
        <p>Rating: {dish.rating}</p>
        <p>Price: {dish.price} ETB</p>
        <Link href={`/menu/${dish.id}`}>
        View Details
      </Link>
      </div>
    );
  }