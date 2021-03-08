

import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

//import AuthContext from "../../../context/AuthContext";

function SignUp() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        nom,
        prenom,
        email,
        password,
     
      };

       await axios.post("http://localhost:3001/user/signup", registerData);
    
     
     // await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <h1>Registration Form</h1>
      <form onSubmit={register}>
      <div className="form-group text-left">
      <label >Nom</label>
      <input
      className = "form-control"
          type="text"
          placeholder="Nom"
          onChange={(e) => setNom(e.target.value)}
          value={nom}
          autoComplete="off"
          required
        />
        </div>
        <div className="form-group text-left">
        <label >Prenom</label>
         <input
         className = "form-control"
        type="text"
        placeholder="Prenom"
        onChange={(e) => setPrenom(e.target.value)}
        value={prenom}
        autoComplete="off"
        required
      />
      </div>
      <div className="form-group text-left">
      <label >Email address</label>
        <input
        className = "form-control"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          autoComplete="off"
          required
        />
        </div>
        <div className="form-group text-left">
        <label >Password</label>
        <input
        className = "form-control"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          autoComplete="off"
          required
        />
        </div>
     
        <button type="submit" className="btn btn-primary">Register</button>
        {/* <div className="mt-2">                 <span>Already have an account? </span>
               <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> 
             </div>
             */}
      </form>
    </div>
  );
}

export default SignUp;
