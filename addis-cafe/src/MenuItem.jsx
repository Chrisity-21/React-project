function MenuItem({
    name,
    price,
    description,
    quantity,
    onAdd,
    image
  }) {
    return (
      <div className="menu-item">
        <img src={image} alt={name} width="300" />

        <h1>{name}</h1>

        <p>{description}</p>

        <p>{price} ETB</p>

        <p>With service charge {price * 1.15} ETB</p>

        <button onClick={onAdd}>Add</button>

        <p>Quantity: {quantity}</p>
      </div>
    );
  }

  export default MenuItem;