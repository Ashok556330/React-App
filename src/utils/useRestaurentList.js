import { useEffect, useState } from "react"

const useRestaurentList = () => {
    const [listOfrestaurents, setListOfRestaurents] = useState([]);
    useEffect(() => {
        fetchRestaurentList();
    })

    const fetchRestaurentList = async () =>{
        const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurents(json.data);
    }
    return listOfrestaurents;
}

export default useRestaurentList;


// import { useState, useEffect } from "react";

// const UserTable = () => {
//     const [users, setUsers] = useState(" ");

//     useEffect(() => {
//         userList();
//     }, []);

//     const userList = async () => {
//         const data = await fetch("vv");
//         const jsonData = data.json();
//         setUsers(jsonData);
//     }

//     return (
//         <div>
// 					<table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>  
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr>
//                   <td>{user.id}</td>
//                   <td>{user.name}</td>
//                 </tr>
//               ))}
              
//             </tbody>
// 					</table>
//         </div>
//     )
// }

// export default UserTable;

