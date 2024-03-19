import React, {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import { Outlet } from 'react-router-dom'

function Protected(Props){
    const {currentUser} = useContext(AuthContext)

    /*if currentuser is not present*/
   // if(!currentUser)
   // return <Navigate to={`/login`}/>
    
    /*if currentuser is present*/
   // return Props.children

   return(
    <React.Fragment>
        {
            currentUser? <Outlet/> : <Navigate to={`/login`}/>
        }
    </React.Fragment>
   )

}
export default Protected