import {useEffect, useState} from 'react';
import Result from './Result';


const SearchBar= () => {

const app_id = '38a27524';
const app_key = '97588ebe488a168dfae5657ae383217a';

const [recipes, setRecipes] = useState([]);


const [search, setSearch]= useState('');


//state after submit to fetch data
// chicken default value
const [query,setQuery] = useState ('chicken');
// run when query changes 
useEffect ( ()=>{
    console.log('fetching data');
getRecipes();

//run only when we hit submit button ie data will change with search
}, [query]);



// const getRecipes = async () => {
// const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id }&app_key=${app_key}`)
// const data =  response.json();

// console.log(data);
// setRecipes(data.hits);
// };




const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id }&app_key=${app_key}`);
    const data = await response.json();
    console.log(data);
    //property hits
    setRecipes(data.hits);
  };
  
//value of input 
 const updateSearch = e =>{
     //value of input
     setSearch(e.target.value);
 }
 
 const getSearch = e =>{
     //stop page refreshe 
     e.preventDefault();
     //get finished text
    setQuery(search);
  
    //initialize input 
    setSearch('');
}

    return (
    <>
    
     <form className="search-form" onSubmit={getSearch}>
     <input type="text" className="search-bar"   onChange={updateSearch} autoComplete="off"/>
      <button type="submit" className="search-button">search</button>

     </form>
     <div className="recipes">
     {recipes.map(recipe =>(
  <Result
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        ingredients={recipe.recipe.ingredients}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        />
     ))}
   </div>
    </>
    );
  };
  
  export default SearchBar;