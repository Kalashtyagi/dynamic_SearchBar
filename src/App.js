// import logo from './logo.svg';
// import './App.css';
// import { useEffect, useState } from 'react';

// function App() {
//   const[data,setData] = useState([]);
//   const[search,setSearch] = useState("");
//   const[query,setQuery] = useState("");
//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response=>response.json())
//     .then(data=>{
//       console.log(data)
//       setData(data);
//   })
//     .catch(error=>console.log(error))

//   },[])

//   const Search = () =>{
//     setQuery(search)

//   }

//   const filterData = data.filter((item)=>(
//     item.name.toLowerCase().includes(query.toLowerCase()) ||
//     item.email.toLowerCase().includes(query.toLowerCase())
//   ))

//   console.log(search);
//   return (
//     <div className="App">
      
//         <table style={{border:"2px solid black"}}>
//           <thead>
//             <tr >
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//             </tr>
//           </thead>
//           <tbody>
//           {filterData && filterData.map((item)=>(
//              <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//              </tr>
//           ))}
//           </tbody>
//           {
//             filterData.length == 0 && 
//               <span style={{color:"red"}}>{`No Data Found ${search}`} </span>
//           }
         
         
//         </table>
//       <input type="search" placeholder='type to search..' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
//       <button style={{color:'white',backgroundColor:"black"}} onClick={Search} >Search</button>
      
//     </div>
//   );
// }

// export default App;



import React from "react";
function App(){
  const[data,setData] = React.useState([]);
  const[search,setSearch] = React.useState("");
   function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);
      setData(data);
    })
   }
   React.useEffect(()=>{
fetchData();
   },[])

   const filterData = data.filter((item)=>(
    item.name.toLowerCase().includes(search.toLowerCase) ||
    item.email.toLowerCase().includes(search.toLowerCase())
   ))

  return(
    <>
    <h1>Dynamic Search</h1>
    <table>
      <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
      </thead>
      <tbody>
        {
            filterData && filterData?.map((item)=>(
              <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
        </tr>
            ))
        }

        {
          filterData.length == 0 && 
          <span style={{color:"red"}}>{`${search} is not found`}</span>
        }
        
      </tbody>
      <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="search.."></input>
    </table>
    </>
  )

}

export default App;