import React,{useState} from 'react'
import axios from 'axios'
const Email=(props)=>{
    const[email,setEmail]=useState('')
    const[formErrors,setFormErrors]=useState({})
    const errors={}
    const{handleAuth}=props

    const handleEmail=(e)=>{
        const result=e.target.value
        setEmail(result)
    }
    function validation(){
        if(email.trim().length===0){
            errors.email="email cannot be blank"
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        validation()
        if(Object.keys(errors).length===0){
            setFormErrors({})
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res)=>{
              const userData=res.data.filter((ele)=>{
                return ele.email===email
              })
             console.log(userData)
             if(userData.length!==0){
                localStorage.setItem('userData',JSON.stringify(userData))
                props.history.push('/login')
                handleAuth()
             }else{
                console.log('record not found')
             }
            })
            .catch((err)=>{
                alert(err.message)
            })
            setEmail('')
            setFormErrors({})
        }
    }
    return (
        <div>
        <center>
          <form onSubmit={handleSubmit}>
          <input type="text" placeholder='enter email' 
          value={email} onChange={handleEmail} /><br/><br/>
          {formErrors.email&&<span>{formErrors.email}</span>}
          <input type="submit" value="Login"/>
        </form>  
        </center>
         
        </div>
    )
}
export default Email