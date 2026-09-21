function Cart({cart}) {
    return (
        <div>
            <h1>Your Cart</h1>
            {Cart.length === 0 ? (
                <p>Your cart is empty</p>
            ): (
                cart.map((dish)=>(
                    <div key={dish.id}>
                    <h2>{dish.name} </h2>
                    </div>
                ))
            )}
        </div>
    );
}

export default Cart;