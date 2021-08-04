export function RecipeNames(props) {
    return (
        <div className="recipeName">
            <div className="recipeName-item">
                <p className="title">{props.title}</p>
                <img src={props.imgUrl} width="70%"></img>
            </div>
            <div className="recipeName-item">
                <p>{new Date().toDateString}</p>
                <p className="text">{props.text}</p>
            </div>


        </div>
    );
}