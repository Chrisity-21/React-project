const API_URL = "https://dummyjson.com/recipes";

import MenuList from "./MenuList";
import {useState, useEffect} from "react"
import Category from "./Category";



function Menu(){
const [dishes, setDishes ] = useState([])
const [selectedCategory, setSelectedCategory] = useState("All")
const [cart , setCart] =useState([])
function addToCart(dish){
    setCart([...cart, dish])
}




const categories = [
    "All",
    ...new Set(dishes.map((dish)=> dish.cuisine))
];
const fliterDishes = dishes.filter((dish)=>{
    if(selectedCategory ==="All"){
        return true
    }
    return dish.cuisine === selectedCategory;
})
const [loading, setLoading] = useState(true)
const [error, setError] = useState(false)



useEffect(()=>{
    fetch(API_URL)
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data)
        setDishes(data.recipes)
        setLoading(false)
    })
    .catch(() => {
        setError(true);
        setLoading(false)
    })
},[])
    return(
        <div>
            <h2>Our Menu</h2>
            <Category
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            />

            {loading?
            (<p>Loading...</p>)
            : error? (
                <p>Something went wrong</p>
            )
            : ( <MenuList
                dish ={fliterDishes}
                onAddToCart = {addToCart} />

            )
        }


        </div>
    )
}

export default Menu;