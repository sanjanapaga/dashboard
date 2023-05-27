import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Login=(props)=>{ 
  const[user,setUser] = useState([])
  const[posts,setPosts] = useState([])
  const{handleAuth} = props
  
  useEffect(()=>{
    const result= JSON.parse(localStorage.getItem('userData'))
    setUser(result)
  },[])

  const userId = user.map((ele)=>{
    return ele.id
  })

  useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then((res)=>{
          const result = res.data
          setPosts(result)
        })
        .catch((err)=>{
          alert(err.message)
        })
  },[])

  return (
    <div className="border border-secondary border-5">
      {user.length >0 && (
        <div className="border border-4 p-3 mb-2  bg-dark-subtle text-emphasis-dark" >
        {user.map((ele, i)=>{
          return(
            <div key={i} >
              <h2>Name-{ele.name}</h2>
              <h4>Email-{ele.email}</h4>
              <h4>Phone-{ele.phone}</h4>
              <h4>{ele.company && ele.company.name}</h4>
              <h4>{ele.company && ele.company.catchPhrase}</h4>
            </div>
          )
        }
        )}
        </div>
      )} 
      <div >
        <div className='border border-4'>
          <ul>
            {posts.map((ele)=>{
              return <li key={ele.id}> <h4>POST Title</h4> {ele.title}</li>
            })}
          </ul>
        </div>
  
        <button onClick={()=>{
              alert("successfully logged out")
              localStorage.removeItem('userData')
              props.history.push('/email')
              handleAuth()
            }}>Logout
        </button>
      </div>
    </div>

   
  )
}
export default Login