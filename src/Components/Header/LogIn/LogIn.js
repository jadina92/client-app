// import React, {useState} from 'react';

// import validate from './validate';

// function  LogIN (){
//     const [data, setData] = useState({
     
//         Email : "",
//         Password : ""
//       });
//       const { email, password } = data;
// //     const url='http://localhost:3000/api/login'
// // let request = {

// // }
// // axios.post('url', req)
// // .then (res =>{
// //     console.log(res.data.message);
// // })
// // .catch(err =>{
// //     console.log(err);
// // })
// const handleChange = e => setData ({
//     ...data,[e.target.name]: e.target.value
// });

// const onSubmit = e => {
//     e.preventDefault();
//     console.log('user is logged');
// }
//     return (
//         <div>
//         {/* {register? (
//           <p className="registerdMsg">Your were registered  successfully!!!</p>
//         ) : ( */}
//           <form onSubmit={onSubmit}>
                
//                 <input
//                   className="input"
//                   type="email"
//                   onChange={handleChange}
//                   value ={data.email}
//                   placeholder="Email..."
//                   required
//                 />
//                 <input
//                 onChange={handleChange}
//                   type="password"
//                   value ={data.password}
//                   placeholder="password..."
//                   required
//                 />
//             <button type="submit" >
//            log in
//             </button>
//           </form>
      
//       </div>
//     );
  



  
// }
// export default LogIN


  import React from 'react';
  import useForm from "./useForm";
  import validate from './validate';
  import { Form, FormGroup, Label, Input, Button } from "reactstrap";
  
  function  LogIN (){
    
    const {
      values,
      errors,
      handleChange,
      handleSubmit,
    } = useForm(login, validate);
  
    function login() {
      console.log('No errors, submit callback called!');
    }

    
  
    return (
    
              <form onSubmit={handleSubmit} noValidate>
              <FormGroup>
                  <label >Email Address</label>
                    <input autoComplete="off" className={`input ${errors.email && 'is-danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                    <small className="text-danger">
                    {errors.email && (
                      <p className="help is-danger">{errors.email}</p>
                    )}
                     </small>
            </FormGroup>
  
            <FormGroup>
                  <label >Password</label>
                    <input className={`input ${errors.password && 'is-danger'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} required />
                    <small className="text-danger">
                  {errors.password && (
                    <p className="help is-danger">{errors.password}</p>
                  )}
                   </small>
            </FormGroup>
                <button type="submit" className="button is-block is-info is-fullwidth">Login</button>
              </form>
    );
  };
  
export default LogIN