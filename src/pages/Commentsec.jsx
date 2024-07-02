// import React from "react";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { MdDelete } from "react-icons/md";
// import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from "react-router-dom";


// import { CgProfile } from "react-icons/cg";
// export default function CommentSec() {
//   const location = useLocation();
 
//   const navigate= useNavigate()
//   const [newcmnt, setNewCmnt] = useState("");
//   const [comments, setComments] = useState([]);
//   const [credentials, setCredentials] = useState({
   
//     comment_text: undefined,
//   });
  

//   const handleChange = (e) => {
//     const updatedComment = e.target.value;
//     setNewCmnt(updatedComment);
//     setCredentials((prevCredentials) => ({
//       ...prevCredentials,
//       comment_text: updatedComment,
     
//     }));
//   };
//   const handleClick = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         `${process.env.REACT_APP_BACKEND_URL}/backend/comment/createcomment/${newsid}`,
//         credentials
//       );
//       console.log(res.data.success);
//       if (res.data.success) {
//         const fetchComments = async () => {
//           const res = await axios.get(
//             `${process.env.REACT_APP_BACKEND_URL}/backend/comment/getallcomments`
//           );

//           setComments(res.data.comments);
//         };
//         fetchComments();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     const fetchComments = async () => {
//       const res = await axios.get(
//         `${process.env.REACT_APP_BACKEND_URL}/backend/news/getnewswithcomments/${newsid}`
//       );

//       setComments(res.data.comments);
//     };
//     fetchComments();
//   }, []);
//   return (
//     <div>
     
//       <div className="my-3 p-3 bg-white rounded box-shadow">
//         <h6 className="border-bottom border-gray pb-2 mb-0 mt-3">
//          Discussions ({comments.length})
//         </h6>
//         {comments?.map((item, index) => (
//           <div
//             className="media text-muted pt-3 d-flex border-bottom border-gray"
//             key={index}
//           >
//             <CgProfile
//               className="m-2"
//               style={{ color: "#007ba7", "font-size": "1.5rem" }}
//             />
//             <p className="media-body pb-3 mb-0 small lh-125  m-2">
//               <strong className="d-block text-gray-dark">{item.author}</strong>
//               <div className="d-flex ">
//                 {item.desc}
                
//               </div>
//             </p>
//           </div>
//         ))}
//       </div>
//       {/* comment form */}

//       <div className="d-flex justify-content-center ">
//         <input
//           type="text"
//           className="p-2 rounded w-75 m-1 border border-secondary"
//           id="comment"
//           onChange={handleChange}
//           value={newcmnt}
//           placeholder="Add Comment ..."
//         />
//         <button
//           className="btn py-1 px-2 m-1 text-white"
//           style={{ backgroundColor: "#007ba7" }}
//           onClick={handleClick}
//         >
//           Submit
//         </button>
//         <button
//           className="btn py-1 px-2 m-1 text-white"
//           style={{ backgroundColor: "#007ba7" }}
//           onClick={()=>navigate('/')}
//         >
//           Back
//         </button>
//       </div>
//       <ToastContainer />
//     </div>
    
//   );
// }
