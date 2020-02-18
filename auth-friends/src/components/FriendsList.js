import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "./AxiosWithAuth"
import {Link} from "react-router-dom";
import AddFriend from "./AddFriend";



function FriendsList(){

    const [friends,setFriends]=useState([])

    useEffect(()=>{
        axiosWithAuth()
        .get("/friends")
        .then(res=>{
            console.log("data from friends:", res.data)
            setFriends(res.data)
        })

        .catch(error=>console.log("error", error))
    },[])
  return (
      <div>
          <AddFriend/>
          <div>
              <h2> ALL MY FRIENDS</h2>
              <Link to ="/">GO BACK HOME</Link>
          </div>
          {friends.map(item=>(
              <div className="list" key={item.id}>
                  <p> Name : {item.name}</p>
                  <p> Age : {item.age}</p>
                  <p> e-mail : {item.email}</p>
              </div>
          ))}
      </div>
  )

}
    

 


export default FriendsList;