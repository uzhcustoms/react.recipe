export function RecipeCooking(props) {
    return (
        <div className="recipeCooking">
            <h3 className="title">Процес приготовления:</h3>
            <div className="recipeCooking-item">{props.cooking}
            </div>
        </div>
    );
}