
import React, { useEffect, useState } from "react"
import Profiles from "./Profiles"
const Scoreboard = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://cicada3301.onrender.com/score")
    const data = await response.json()
    setUsers(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container">
      <div className="bg-img"></div>
      <h1 className='Scoreboard'>Scoreboard</h1>
     <div className='board'>
        
         <div className="header">
         <h1 >Rank</h1>
         <h1 >Team</h1>
    <h1 >Level</h1>
    <h1>Points</h1> 
    <h1>College</h1>
    </div>
       <div className="profiles">
       
        {users.map((user)=>{
          
        return(
          <div>
              <Profiles user={user} />
        
       
        </div>
        
       ) })}
         
        </div>
       
       </div>
       
    </div>
         
     
 
  )
}


export default Scoreboard


