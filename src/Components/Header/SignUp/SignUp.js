
// // // import React, { useState } from "react";
// // // import axios from "axios";

// // // export default function CreateCustomer() {
// // //   const [first_name, setfirst_Name] = useState("");
// // //   const [last_name, setlast_Name] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [password, setpassword] = useState("");
// // //   const [register, setRegister] = useState(false);


// // //   const onChangeFirstName = (e) => {
// // //     setfirst_Name({ firstname: e.target.value });
// // //   };
// // //   const onChangeLastName = (e) => {
// // //     setlast_Name({ lasttname: e.target.value });
// // //   };
// // //   const onChangeEmail = (e) => {
// // //     setEmail({ email: e.target.value });
// // //   };
// // //   const onChangePassword = (e) => {
// // //     setpassword({ password: e.target.value });
// // //   };

// // //   // const onSubmit = (e) => {
// // //   //   e.preventDefault();
// // //   //   const bookingData = {
// // //   //     first_name: first_name,
// // //   //     last_name: last_name,
// // //   //     email: email,
// // //   //     password : password
    
// // //   //   };
// // //   //   console.log(bookingData);

// // //   //   axios
// // //   //     .post("http://localhost:3001/api/Users/signup", bookingData)
// // //   //     .then((res) => {
// // //   //       console.log(res.data);
// // //   //       setfirst_Name(first_name);
// // //   //       setlast_Name(last_name);
// // //   //       setEmail(email);
// // //   //       setpassword(password);
// // //   //     })
// // //   //     .catch((error) => {
// // //   //       console.log(error);
// // //   //     });
// // //   //   setRegister(true);
// // //   // };
// // //   const onSubmit = async (e) => { 
// // //     e.preventDefault(); 
// // //     const getInputData = { 
// // //         first_name :first_name , 
// // //         last_name :last_name , 
// // //         email: email, 
// // //         password: password, 
// // //     }; 
// // //     console.log(getInputData); 

// // //     await axios.post('/signup', 
// // //     getInputData).then((res) => { 
// // //     console.log(res.data); 
// // //     setfirst_Name(first_name);
// // //            setlast_Name(last_name);
// // //            setEmail(email);
// // //           setpassword(password);
// // //     }).catch((error) => { 
// // //     console.log(error); }); 
// // //     setRegister(true); 
// // // };
// // //   return (
// // //     <div>
// // //       {register? (
// // //         <p className="registerdMsg">Your were registered  successfully!!!</p>
// // //       ) : (
// // //         <form onSubmit={onSubmit} className="form contact-form">
// // //           <div className="input-group-wrap">
// // //             <div className="input-group">
// // //               <input
// // //                 className="input"
// // //                 type="text"
// // //                 onChange={onChangeFirstName}
// // //                 placeholder="Name..."
// // //                 required
// // //               />
// // //                <input
// // //                 className="input"
// // //                 type="text"
// // //                 onChange={onChangeLastName}
// // //                 placeholder="last Name..."
// // //                 required
// // //               />
// // //               <span className="bar"></span>
// // //             </div>
// // //             <div className="input-group">
// // //               <input
// // //                 className="input"
// // //                 type="email"
// // //                 onChange={onChangeEmail}
// // //                 placeholder="Email..."
// // //                 required
// // //               />
// // //               <span className="bar"></span>
// // //             </div>
// // //             <div className="input-group">
// // //               <input
// // //                 onChange={onChangePassword}
// // //                 type="password"
// // //                 className="input"
// // //                 placeholder="password..."
// // //                 required
// // //               />
              
// // //               <span className="bar"></span>
// // //             </div>
// // //           </div>
// // //           <button type="submit" className="btn form-btn btn-purple">
// // //           signup
// // //             <span className="dots">
// // //               <i className="fas fa-ellipsis-h"></i>
// // //             </span>
// // //           </button>
// // //         </form>
// // //       )}
// // //     </div>
// // //   );
// // // }



// import react, { useState} from 'react';
// import axios from 'axios';


// function SignUp() {

//   //const url ="http://localhost:3001/api/Users/signup";
//   const url ="http://localhost:3001/create";
 
 
//   const [input, setInput] = useState({
  
//     Nom : "", 
//     Prenom : "", 
//     Email : "",
//     Password : ""
//   })
// let  success = 'false';


//   function handleClick(e){
//     e.preventDefault();
//     console.log(input);
//     axios.post(url,{
//       nom : input.nom, 
//       prenom : input.prenom,
//       email : input.email,
//       password : input.password
//     })
//       .then(result => {
//         if (result.errors) {
//           return setInput(result);
//         }
//         return setInput({
//           data: result,
//           errors: null,
//           success: true
//         });
//       });

//   };


// // function submit(e) {

// //     e.preventDefault()
// //     console.log(e)
// //     fetch(url,{
// //         method: 'POST',
// //         headers: {
// //             Accept: 'application/json',
// //                     'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(data)
// //     }).then(response => {
// //             console.log(response)
// //         })
// //         .catch(error =>{
// //             console.log(error)
// //         })
    
// // }


 
//   function handleChange(event) {
//     // const newdata ={...data}
//     // //setData({...data, nom: event.target.value})
//     // newdata[e.target.id]=e.target.value;
//     // setData(newdata);
//     // console.log(newdata);
//     //destructuring
//     const {name, value} = event.target;
//     setInput(prevInput =>{
//       return{
//         ...prevInput,
//         [name]: value
//       }
//     })
//   }

  
//   return (
  
//       <div className='container'>
//         {/* {register? (
//           <p className="registerdMsg">Your were registered  successfully!!!</p>
//         ) : ( */}
//         <h2>signup form</h2>
//           <form >
//             <div className='form-group'>
//                 <input
//                   type="text"
//                   name= "nom"
//                   onChange={handleChange}
//                   value ={input.nom}
//                   placeholder="Name..."
//                   required
//                 />
//                 </div>
//                 <div className='form-group'>
//                  <input
//                   type="text"
//                   name='prenom'
//                   onChange={handleChange}
//                   value ={input.prenom}
//                   placeholder="last Name..."
//                   required
//                 />
//                 </div>
//                  <div className='form-group'>
//                 <input
//                   className="input"
//                   type="email"
//                   name='email'
//                   onChange={handleChange}
//                   value ={input.email}
//                   placeholder="Email..."
//                   required
//                 />
//             </div>
//                 <div className='form-group'>
//                 <input
//                 onChange={handleChange}
//                   type="password"
//                   name="password"
//                   value ={input.password}
//                   placeholder="password..."
//                   required
//                 />
//                 </div>
//             <button className="btn btn-lg btn-info" onClick={handleClick} >
//             signup
//             </button>
//           </form>
      
//       </div>
//     );
//   }
  
// export default SignUp;



 
  

   
import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
const SignUp= () => {
  const { register, handleSubmit, errors } = useForm();
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};


  const registerOptions = {
    nom: { required: "nom is required" },
    prenom: { required: "nom is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 6 characters"
      }
    }
  };

//send our user object to the backend:
 const createUser = () => {

    return fetch(`http://localhost:3001/api/Users/signup`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(registerOptions)
    })
    .then(res => res.json());
   
  }
  const HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
 function submit (){
     
 }

  return (
    <Form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <FormGroup>
        <Label>Nom</Label>
        <Input name="nom" innerRef={register(registerOptions.nom)} />
        <small className="text-danger">
          {errors.nom && errors.nom.message}
        </small>
      </FormGroup>
      <FormGroup>
        <Label>Prenom</Label>
        <Input name="prenom" innerRef={register(registerOptions.prenom)} />
        <small className="text-danger">
          {errors.prenom && errors.prenom.message}
        </small>
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          innerRef={register(registerOptions.email)}
        />
        <small className="text-danger">
          {errors.email && errors.email.message}
        </small>
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          innerRef={register(registerOptions.password)}
        />
        <small className="text-danger">
          {errors.password && errors.password.message}
        </small>
      </FormGroup>
      <Button color="primary" onClick={submit}>Submit</Button>
    </Form>
  );
};



export default SignUp;