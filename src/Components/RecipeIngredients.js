export function RecipeIngredients(props) {
    return (
        <div className="recipeIngred">
            <h3 className="title">Продукты:</h3>
            <div className="recipeIngred-item">{props.ingredients}
            </div>
        </div>
    );
}