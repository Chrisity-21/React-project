import MenuCard from "./MenuCard";


function MenuList({dish, onAddToCart}){
    return(
        <div className="menu">
            {dish. map((oneDish)=>(
                <MenuCard
                key ={oneDish.id}
                dish ={oneDish}
                onAddToCart ={onAddToCart}
                />

            ))}
        </div>
    )
}
export default MenuList;