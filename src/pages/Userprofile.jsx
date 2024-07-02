// import React, { useState } from 'react'
// import axios from 'axios'
// import { useEffect } from 'react'
// export default function Userprofile() {
//     const user_id=localStorage.getItem("user_id")
//     const [name,setName]=useState('')
//     const [email,setEmail]=useState('')
//     const [polls,setPolls]=useState([])
//     const fetchUserInfos = async ()=>{
//         try {
//             const response = await axios.get(
//                 `${process.env.REACT_APP_BACKEND_URL}/backend/users/getUser/${user_id}`,
               
//               );
        
//               if (response.data.success) {
//                 console.log(response.data)
//                setName(response.data.name)
//                setEmail(response.data.email)
//                setPolls(response.data.polls)
//               }
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     useEffect(() => {
//         fetchUserInfos();
//       }, []); 
//   return (
//     <div>
       
//     </div>
//   )
// }
