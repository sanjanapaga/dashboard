import React from 'react'
import {Link, Route} from 'react-router-dom'
import Email from './Email'
import Login from './Login'

const NavBar = (props)=>{
    const{loggedIn, handleAuth} = props

    return (
        <div>
            <ul>
                {loggedIn ? (
                    <center><Link to="./login">Login</Link></center>
                ):(
                    <center><Link to="./email">Email</Link></center>
                )
                }
            </ul>
            
            <Route path="/login" exact={true} 
                render={(props)=>{
                    return <Login {...props} handleAuth={handleAuth}/>
                }}
            />
            <Route path="/email" exact={true} 
                render={(props)=>{
                    return <Email {...props} handleAuth={handleAuth}/>
                }}
            />
            
        </div>
    )
}
export default NavBar