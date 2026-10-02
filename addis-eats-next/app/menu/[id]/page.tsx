type PageProps = {
    params: Promise<{
      id: string;
    }>;
  };


  export default async function DishDetails({ params }: PageProps) {
    const { id } = await params;
    const response = await fetch(
        `https://dummyjson.com/recipes/${id}`
      );

      const dish = await response.json();

    return (
      <main>
           <img
        src={dish.image}
        alt={dish.name}
        width={300}
      />
        <h1>Dish Details</h1>

        <p>Dish ID: {id}</p>
      </main>
    );
  }