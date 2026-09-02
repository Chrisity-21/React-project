function Header(){
    const restaurantName = "Welcome to Addis-Cafe"
    return(
       <header className="header">
        <h1> {restaurantName} </h1>
        <p>Fresh Coffee, Juice & More</p>
       </header>
    )
}
export default Header;