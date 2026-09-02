import MenuItem from "./MenuItem"
import caffelatteImage from "./assets/cafelatte.jpg";
import bunaImage from "./assets/buna.jpeg";
import MacchiatoImage from "./assets/Macchiato.jpg";
import cocacolaImage from "./assets/cocacola.webp";
import AvocadoImage from "./assets/Avocado.jpg";
import fantaImage from "./assets/fanta.jpeg";
import applejuiceImage from "./assets/applejuice.webp";
import freshfruitImage from "./assets/freshfruit.jpg";


const menu = [
    {
      id: 1,
      name: "Caffè Latte",
      description: "Espresso with steamed milk",
      category: "Hot Drink",
      price: 150,
      image:caffelatteImage
    },
    {
      id: 2,
      name: "Buna",
      description: "Traditional Ethiopian coffee",
      category: "Hot Drink",
      price: 120,
      image: bunaImage
    },
    {
      id: 3,
      name: "Macchiato",
      description: "Espresso with a little milk foam",
      category: "Hot Drink",
      price: 110,
      image: MacchiatoImage
    },
    {
      id: 4,
      name: "Apple Juice",
      description: "Fresh blended apple juice",
      category: "Juice",
      price: 150,
      image: applejuiceImage
    },
    {
      id: 5,
      name: "Avocado Juice",
      description: "Fresh blended avocado juice",
      category: "Juice",
      price: 130,
      image: AvocadoImage
    },
    {
      id: 6,
      name: "Coca-Cola",
      description: "Chilled Coca-Cola with ice",
      category: "Soda",
      price: 120,
      image: cocacolaImage
    },
    {
      id: 7,
      name: "Fanta",
      description: "Chilled Fanta with ice",
      category: "Soda",
      price: 110,
      image: fantaImage
    },
    {
      id: 8,
      name: "Fruit Cocktail",
      description: "Different fresh fruits mixed together",
      category: "Special",
      price: 180,
      image: freshfruitImage
    }
  ];

  function Menu(){
  return(
    <section id="menu" className="menu">
       {menu.map((item) => {
        return(
            <MenuItem
            key = {item.id}
            name = {item.name}
            price = {item.price}
            description={item.description}
            category={item.category}
            image={item.image}
            />
        )
       })}

    </section>
  )
  }

  export default Menu;