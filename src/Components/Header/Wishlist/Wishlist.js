// // import React, { useContext } from "react";
// import { GlobalContext } from "../context/GlobalState";
// import { recettes } from "../Recettes/Recette";


// const Wishlist = () => {

//     const { favouriteList } = useContext(GlobalContext);

//     return (
//       <div className="recette-page">
//         <div className="container">
//           <div className="header">
//             <h1 className="heading">My favouriteList</h1>
  
//             <span >
//               {favouriteList.length} {favouriteList.length === 1 ? "recette" : "recettes"}
//             </span>
//           </div>
  
//           {favouriteList.length > 0 ? (
//             <div className="recette-grid">
//               {favouriteList.map((recette) => (
//                 <recetteCard recette={recette} key={recette.id} type="favouriteList" />
//               ))}
//             </div>
//           ) : (
//             <h2 className="no-recettes">No recettes in your list! Add some!</h2>
//           )}
//         </div>
//       </div>
//     );
//   };
  
//   export default Wishlist;