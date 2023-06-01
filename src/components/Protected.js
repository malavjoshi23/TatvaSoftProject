// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Protected(props) {
//   const { Component } = props;
//   const navigate = useNavigate();

//   useEffect(() => {
//     let isLogin = localStorage.getItem("login");
//     if (!isLogin) {
//       navigate("/signup");
//     }
//   });

//   return (
//     <div>
//       <Component />
//     </div>
//   );
// }
