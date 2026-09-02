function MenuItem({name, price, description, category, image }){
    return(
      <div className="menu-item">
        <img src= {image}  alt={name} width = "300" />
        <h1> {name} </h1>
        <p> {description} </p>
        <p> {category} </p>
        <p> {price} ETB </p>
        <p> with service charge {price * 1.15} </p>
      </div>
    )
}
export default MenuItem;