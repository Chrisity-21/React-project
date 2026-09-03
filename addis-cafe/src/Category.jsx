function Category ({categories, selectedCategory, onSelect}){
    return (
        <div className="categories">
            {categories.map((category) => (
                <button
                key={category}
                onClick={() => onSelect(category)}>
                    {category}
                </button>
            ))}
        </div>
    )
}
export default Category;