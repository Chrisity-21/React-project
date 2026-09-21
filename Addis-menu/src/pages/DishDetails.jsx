import { useParams } from "react-router-dom";
function DishDetails() {

    const { id } = useParams();

    return (
        <div>
            <h1>Dish Details</h1>
            <p>Dish ID: {id}</p>
        </div>
    );
}

export default DishDetails;