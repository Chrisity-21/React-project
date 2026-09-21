function Layout({children}){
    return(
        <div>
            <header>
                <h1>Addis Menu</h1>
            </header>

            <main> {children} </main>
        </div>
    )
}
export default Layout;