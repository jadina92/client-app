//  import React, { useReducer, useEffect, useRef } from 'react';
// import { verifyLogin } from './utils';

// const initialState = {
//   email: '',
//   password: '',
//   isLoading: false,
//   isLoggedIn: false,
//   error: ''
// };

// function loginReducer(state, action) {
//   switch (action.type) {
//     case 'field': {
//       return {
//         ...state,
//         [action.fieldName]: action.payload
//       };
//     }
//     case 'login': {
//       return {
//         ...state,
//         error: '',
//         isLoading: true,
//         isFocused: true
//       };
//     }
//     case 'success': {
//       return {
//         ...state,
//         isLoggedIn: true,
//         isLoading: false
//       };
//     }
//     case 'error': {
//       return {
//         ...state,
//         error: 'Incorrect email or password entered',
//         isLoggedIn: false,
//         isLoading: false,
//         email: '',
//         password: '',
//         isFocused: true
//       };
//     }
//     case 'logout': {
//       return {
//         ...state,
//         isLoggedIn: false,
//         email: '',
//         password: '',
//         error: ''
//       };
//     }
//     default:
//       return state;
//   }
// }

// export default function LogIn() {
//   const [state, dispatch] = useReducer(loginReducer, initialState);
//   const { email, password, isLoading, isLoggedIn, error, isFocused } = state;
//   const emailRef = useRef(null);

//   const handleSubmit = async e => {
//     e.preventDefault();
//     dispatch({ type: verifyLogin });
//     try {
//       await verifyLogin({ email, password });
//       dispatch({ type: 'success' });
//     } catch (error) {
//       dispatch({ type: 'error' });
//     }
//   };

//   useEffect(() => {
//     if (isFocused) {
//       emailRef.current.focus();
//     }
//   }, [isFocused]);

//   return (
//     <div className="App">
//       <div className="login-container">
//         {isLoggedIn ? (
//           <>
//             <h1>Welcome {email}!</h1>
//             <button onClick={() => dispatch({ type: 'logout' })}>
//               Log Out
//             </button>
//           </>
//         ) : (
//           <form className="form" onSubmit={handleSubmit}>
//             {error && <p className="error">{error} </p>}
//             <p>Please Login!</p>
//             <input
//               type="text"
//               ref={emailRef}
//               placeholder="Enter email"
//               value={email}
//               autoFocus
//               onChange={e =>
//                 dispatch({
//                   type: 'field',
//                   fieldName: 'email',
//                   payload: e.currentTarget.value
//                 })
//               }
//             />
//             <input
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={e =>
//                 dispatch({
//                   type: 'field',
//                   fieldName: 'password',
//                   payload: e.currentTarget.value
//                 })
//               }
//             />
//             <button className="submit" type="submit" disabled={isLoading}>
//               {isLoading ? 'Logging In.....' : 'Log In'}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
//  }
// /////////////////////////////////////////////////////////////////////////////////////////////**

// /////////////////////////////////////////////////////////////////
import React, {useState} from 'react';
import axios from 'axios';
import './LogIn.css';

import { withRouter } from "react-router-dom";

function LogIn(props) {
  const API_BASE_URL = "http://localhost:3001/user/login";
    const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null
    })

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload={
            "email":state.email,
            "password":state.password,
        }
        axios.post(API_BASE_URL, payload)
            .then(function (response) {
                if(response.data.code === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Login successful. Redirecting to home page..'
                    }))
                    redirectToHome();
                    props.showError(null)
                }
                else if(response.data.code === 204){
                    props.showError("email and password do not match");
                }
                else{
                    props.showError("Username does not exists");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const redirectToHome = () => {
        props.updateTitle('Accueil')
        props.history.push('/Accueil');
    }
    const redirectToRegister = () => {
        props.history.push('/SignUp'); 
        props.updateTitle('SignUp');
    }
    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={state.email}
                       onChange={handleChange}
                />
        
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" 
                       className="form-control" 
                       id="password" 
                       placeholder="Password"
                       value={state.password}
                       onChange={handleChange} 
                />
                </div>
                <div className="form-check">
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >Submit</button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="registerMessage">
                <span>Pas Inscrire? </span>
                <span className="loginText" onClick={() => redirectToRegister()}>SignUp</span> 
            </div>
        </div>
    )
}

 export default withRouter(LogIn);
//  ////////////////////////////////////////////////////////////////

