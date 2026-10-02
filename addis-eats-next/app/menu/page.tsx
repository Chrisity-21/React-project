const API_URL = "https://dummyjson.com/recipes";
import MenuList from "./MenuList";



export default async function Menu() {
  const response = await fetch(API_URL);
  const data = await response.json();

  const dishWithPrice = data.recipes.map((dish:any, index:number) => ({
    ...dish,
    price: [250, 150, 200, 350, 400][index % 5],
  }));

  return (
    <main>
      <h1>Our Menu</h1>
      <MenuList dishes={dishWithPrice} />
    </main>
  );
}