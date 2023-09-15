import React, { useEffect, useState } from "react";
// import fetchUser from './User';
const Fetchdata=()=>
{
   <>
    {/* <Fetchdata /> */}
   </>
     useEffect(() => {
      fetchUserData()
    }, [])
    const [users, setUsers] = useState([]);
  const fetchUserData = () => {
    fetch("https://api.github.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  return (
   `${alert("hello")}`
    );
}

export default Fetchdata;