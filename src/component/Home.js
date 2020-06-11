import React from 'react'
import {  NavLink} from 'react-router-dom'
function Home() {
    return (
            <div className="home">
                     <ul>
                        <li> <NavLink  to='/movelist' className="item">First Tab</NavLink></li>
                        <li> <NavLink  to='/moviefullpost' className="item">Second Tab</NavLink></li>
                     </ul>
         
             </div>
    )
}

export default Home
