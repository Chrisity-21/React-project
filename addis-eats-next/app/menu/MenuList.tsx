import MenuCard from "./MenuCard";
import { Dish } from "./types";

type MenuListProps = {
  dishes: Dish[];
};

export default function MenuList({ dishes }: MenuListProps) {
  return (
    <div>
      {dishes.map((dish) => (
        <MenuCard
          key={dish.id}
          dish={dish}
        />
      ))}
    </div>
  );
}