
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Accueil from "./Components/Header/Accueil/Accueil";
import Recettes from "./Components/Header/Recettes/Recettes";
import Categories from "./Components/Header/Categories/Categories";
import SignUp from "./Components/Header/SignUp/SignUp";
import LogIn from "./Components/Header/LogIn/LogIn";
import Wishlist from "./Components/Header/Wishlist/Wishlist";
import SearchBar from "./Components/Header/SearchBar/SearchBar";
import AjoutRecette from "./Components/AjouterRecette/AjoutRecette";







function App() {
  return (
    <>
    
      <Router>
  
       
        <div className="container">
    <ul className="nav justify-content-center ">
      <li className="nav-item nav-link active"><Link to="/">Accueil</Link></li>
      <li className="nav-item nav-link active"><Link to="/Recettes">Recettes</Link></li>
      <li className="nav-item nav-link active"><Link to="/Categories">Categories</Link></li>
      <li className="nav-item nav-link active"> <Link to="/Wishlist">Wishlist</Link></li>
      <li className="nav-item nav-link active "> <Link to="/SignUp">SignUp</Link></li>
      <li className="nav-item nav-link active"> <Link to="/LogIn">LogIn</Link></li>
      <li className="nav-item nav-link active"> <Link to="/SearchBar">Recherche</Link></li>
      <li className="nav-item nav-link active"> <Link to="/AjoutRecette">ajoute recette</Link></li>
       
    
   
    </ul>
 
        <Switch>
      
          <Route path="/Accueil/" render={() => <Accueil />} />
          <Route path="/Recettes" render={() => <Recettes />} />
          <Route path="/Categories" render={() => <Categories />} />
          <Route path="/Wishlist" render={() => <Wishlist />} />
          <Route path="/SignUp" render={() => <SignUp />} />
          <Route path="/LogIn" render={() => <LogIn />} />
          <Route path="/AjoutRecette" render={() => <AjoutRecette />} />
    
          <Route path="/SearchBar" render={() => <SearchBar/>} />
          <Route path="/" exact={true} render={() => <Accueil />} />
          <Route path="/" render={() => <div>Erreur</div>} />
        </Switch>
        </div>
      
      </Router>
    
    </>
  );
}

 export default App;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React from "react";
// import Router from "./Router";
// import axios from "axios";
// import { AuthContextProvider } from "./context/AuthContext";

// axios.defaults.withCredentials = true;

// function App() {
//   return (
//     <AuthContextProvider>
//       <Router />
//     </AuthContextProvider>
//   );
// }

// export default App;
