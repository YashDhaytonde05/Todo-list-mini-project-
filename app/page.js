"use client"
import React,{useState} from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])
  const submithandler = (e)=>{
    e.preventDefault()
    setmaintask([...maintask,{title,desc}])
    setdesc("")
    settitle("")
    console.log(maintask)
  }
  
  const deletehandler = (i)=>{
    let copytask  =[...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)
  }

  let rendertask = <h2>No task available</h2>
  
if(maintask.length>0){
  
  rendertask = maintask.map((t,i)=>{
    return <li key ={i} className='flex items-center justify-between mb-8'>
      <div className='flex items-center justify-between mb-5 w-2/3'>
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <h4 className='text-lg font-medium'>{t.desc}</h4>
    </div>
    <button onClick={()=>{
      deletehandler(i)
    }} className='bg-red-800 px-4 py-2 rounded text-white font-bold'>Delete</button>
    </li>
  })
}
  return (
   <>
    <h1 className='bg-orange-500 p-5 text-white font-bold text-5xl text-center'>Todo List</h1>
    <form onSubmit={submithandler}>
      <input type='text' className='border-zinc-800 border-2 m-8 px-4 py-3'
       placeholder='Enter Your Task' value={title}
       onChange={(e)=>{
        settitle(e.target.value)
       }}
       ></input>
      <input type='text' className='border-zinc-800 border-2 m-8 px-4 py-3'
       placeholder='Enter Your Description'
       value={desc}
       onChange={(e)=>{
        setdesc(e.target.value)
       }}
       ></input>
       <button className='bg-black hover:bg-red-600 text-white m-3 p-3 text-xl font-bold rounded
       '>Click Here</button>
    </form>
    <hr/>
    <div className='p-8 bg-slate-200'>
       <ul>{rendertask}</ul>
    </div>
   </>
  )
}

export default page