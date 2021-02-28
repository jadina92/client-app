// import React from 'react';
 
// function Dashboard(props) {
 
//   // handle click event of logout button
//   const handleLogout = () => {    
//     props.history.push('/login');
//   }
 
//   return (
//     <div>
//       Welcome User!<br /><br />
//       <input type="button" onClick={handleLogout} value="Logout" />
//     </div>
//   );
// }
 
// export default Dashboard;

import React, { useState, useEffect } from 'react'  
  
function Dashboard() {  
    const [user, setuser] = useState({ Email: '', Password: '' });  
    useEffect(() => {  
        var a = localStorage.getItem('myData');  
        var b = JSON.parse(a);  
        console.log(b.nom);  
        setuser(b)  
        console.log(user.nom)  
  
    }, []);  
    return (  
        <>  
            <div class="col-sm-12 btn btn-primary">  
                Dashboard  
        </div>  
            <h1>Welcome :{user.nom, user.prenom}</h1>  
        </>  
    )  
}  
  
export default Dashboard  