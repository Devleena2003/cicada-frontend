import React from 'react'

function Profiles({user, index}) {

  for (var index = 1; index <= user.length; index++) {
    console.log(index);
             }
  return (
    <div className='user'>
  <div className='flex' >
  <div className='item'>
            <div className='info'>
                    <h2 className='name'>
                   {index}
                       </h2>
                    
                </div>
            </div>
            <div className='item'>
            <div className='info'>
                    <h2 className='name'>{user.teamName}</h2>
                    
                </div>
            </div>
            <div className='item'>
            <div className='info'>
                    <h2 className='name'>{user.level}</h2>
                    
                </div>
            </div>
            <div className='item'>
            <div className='info'>
                    <h2 className='name'>{user.points}</h2>
                    
                </div>
            </div>
            <div className='item'>
            <div className='info'>
                    <h2 className='name'>{user.collegeName}</h2>
                    
                </div>
            </div>
           
        
    </div>
    
    </div>
  )
}


export default Profiles