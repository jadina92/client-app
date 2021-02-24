
const Result = ({title, calories,image, ingredients}) => {
    return (
        <>
        <h1>{title}</h1>
        <ol>
            {ingredients.map(ingredient =>(
                <li>{ingredient.text}</li>
            ))}
        </ol>
        <p>{calories}</p>
        <img src={image}  alt="image" />
        </>
    );
}
export default Result;