import React, {useEffect, useState} from 'react';
import UserData from "./UserData.jsx";

// const API ="https://jsonplaceholder.typicode.com/users";
const search = "java";
const API = `http://openlibrary.org/search.json?title=${search}`;


const Tableajay = () => {

  const [user, setUsers] = useState([]);
  const fetchUsers = async (url)=> {

    try {
      const res = await fetch(url)
      const data = await res.json();
      if(data.length>0) setUsers(data)
      console.log(data);
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
      <>
        <table>
          <thead>
          <tr>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
          </tr>
          </thead>

          <tbody>
          <UserData user={user}/>
          </tbody>
        </table>

      </>
  )
}

export default Tableajay