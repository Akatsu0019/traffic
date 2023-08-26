// UserInformation.js
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../Context/Context';
import axios from 'axios';
import './styles.css';
import Navbar from '../Navbar/Navbar';

function MyDetail() {
    const { user } = useContext(LoginContext);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        // Fetch all driver details
        axios.get('http://localhost:5000/driver')
            .then(response => {
                const driversData = response.data;
                const matchedDriver = driversData.find(driver => driver.name === user);
                if (matchedDriver) {
                    setUserDetails(matchedDriver);
                }
            })
            .catch(error => {
                console.error('Error fetching user details:', error);
            });
    }, [user]);

    return (
        <div>
            <Navbar />
            <h1><b>User Information</b></h1>
            {userDetails ? (
                <div  className="user-information-container">
                    <p><strong>Name:</strong> {userDetails.name}</p>
                    <p><strong>Driver ID:</strong> {userDetails.driver_id}</p>
                    <p><strong>Email:</strong> {userDetails.email}</p>
                    <p><strong>Contact:</strong> {userDetails.contact}</p>
                    <p><strong>Location:</strong> {userDetails.location}</p>
                    <p><strong>Role:</strong> {userDetails.role}</p>
                </div>
            ) : (
                <p>Loading user information...</p>
            )}
            <div>
              <Link to="/" className="back-button">Back</Link>
            </div>
        </div>
    );
}

export default MyDetail;







// // UserDetail.js
// import React, { useContext } from 'react';
// import { LoginContext } from '../Context/Context';

// function UserDetail() {
//   const { user } = useContext(LoginContext);

//   // Replace this sample data with your actual user data
//   const userDetails = {
//     name: "user.name",
//     driver_id: "sd1",
//     email: "bijalsimachhwa@gmail.com",
//     contact: "9861586497",
//     role: "driver"
//   };

//   return (
//     <div>
//       <h1>User Details</h1>
//       {user ? (
//         <div>
//           <h2>Welcome, {user}!</h2>
//           <p><strong>Name:</strong> {userDetails.name}</p>
//           <p><strong>Driver ID:</strong> {userDetails.driver_id}</p>
//           <p><strong>Email:</strong> {userDetails.email}</p>
//           <p><strong>Contact:</strong> {userDetails.contact}</p>
//           <p><strong>Role:</strong> {userDetails.role}</p>
//         </div>
//       ) : (
//         <p>Please login to see your details.</p>
//       )}
//     </div>
//   );
// }

// export default UserDetail;




// import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios'; // Import Axios
// import { LoginContext } from '../Context/Context';

// function MyDetail() {
//     const {user, setUser} = useContext(LoginContext)
//         const handleLogout=()=>{
//             setUser(null)
//             // Removing data from local storage
//             localStorage.removeItem('userName');

//         }
//   const [loading, setLoading] = useState(true);
//   const { setDusers } = useContext(LoginContext);

//   return (
//     <>
//         <div>
//           <p style={{fontSize:22,color:'green'}}>Hello {user}</p>
//           {/* <p style={{fontSize:22,color:'green'}}>Hello {}</p> */}
//         </div>
//     </>
//   );
// }

// export default MyDetail;







// import React, { useState } from 'react'; // Import useContext if not already imported
// // import { LoginContext } from '../Context/Context';
// import TableView from "../../components/TableView";
// import Cards from "../../components/Cards";

// import * as D from "./styles";

// const MyDetail = () => {
//     const [view, setView] = useState(true);

//     return (
//         <>
    
//         <Box component="div" style={D.container}>
//             <FormControlLabel
//             control={
//                 <Switch
//                 checked={view}
//                 onChange={() => setView(!view)}
//                 name={view ? "Cards" : "Table"}
//                 />
//             }
//             label={view ? "Cards" : "Table"}
//             />
//             {view ? (
//             <Box component="div" style={D.cardsContainer}>
//                 <Cards type="driver" />
//             </Box>
//             ) : (
//             <TableView type="driver" />
//             )}
//         </Box>
//         </>
//     );
//     // return(
//     //     <h1>MyDetail</h1>
//     // )
// }

// export default MyDetail;