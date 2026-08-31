export function Dish(props){
    return(
        <>
            <h1>Dish {props.id}</h1>
            <h2> {props.name} </h2>
            <h3> {props.price}  </h3>
        </>
    )
}