

//  import axios from "axios";
// import React, { useContext, useState } from "react";
// import { useHistory } from "react-router-dom";


// //import AuthContext from "../../../context/AuthContext";

// function AjoutRecette() {
//     const [name, setName] = useState("");
//     const [description, setDescription]  = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [ingredients, setIngredients] = useState("");
//   const [instructions, setInstructions]  = useState("");

//   //const { getLoggedIn } = useContext(AuthContext);
//   const history = useHistory();

//   async function register(e) {
//     e.preventDefault();

//     try {
//       const registerData = {
//         name,
//       description,
//       imageUrl,
//       ingredients,
//       instructions,
//   };
      
//        await axios.post("http://localhost:3001/recipe/add", registerData);
  
//      // await push data ();
//       history.push("/");
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   return (
//     <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
//       <h1>Ajoute une recette</h1>
//       <form onSubmit={register}>
//       <div className="form-group text-left">
//       <label >NOM de recette</label>
//       <input
//       className = "form-control"
//           type="text"
//           placeholder="Nom de Recette"
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//           autoComplete="off"
//           required
//         />
//         </div>
//         <div className="form-group text-left">
//         <label >Description</label>
//          <input
//          className = "form-control"
//         type="text"
//         placeholder="description"
//         onChange={(e) => setDescription(e.target.value)}
//         value={description}
//         autoComplete="off"
//         required
//       />
//       </div>
//       <div className="form-group text-left">
//       <label >Image Url</label>
// {/* <Input type="file" name="file" onChange={uploadFile} boxSizing="border-box" /> */}
//         <input
//         className = "form-control"
//           type="text"
//           placeholder="download image"
//           onChange={(e) => setImageUrl(e.target.value)}
//           value={imageUrl}
//           autoComplete="off"
//           required
//         />
//         </div>
//         <div className="form-group text-left">
//         <label >ingredients</label>
//         <input
//         className = "form-control"
//           type="text"
//           placeholder="ingredients"
//           onChange={(e) => setIngredients(e.target.value)}
//           value={ingredients}
      
//           autoComplete="off"
//           required
//         />
//         </div>
//         <div className="form-group text-left">
//         <label >instructions</label>
//         <input
//         className = "form-control"
//           type="text"
//           placeholder="instructions"
//           onChange={(e) => setInstructions(e.target.value)}
//           value={instructions}
           
//           autoComplete="off"
//           required
//         />
//         </div>
     
//         <button type="submit" className="btn btn-primary">ajouter</button>
//         {/* <div className="mt-2">                 <span>Already have an account? </span>
//                <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> 
//              </div>
//              */}
//       </form>
//     </div>
//   );
// }

// export default AjoutRecette;
