import React,{useEffect,useState} from 'react'



const Contect = () => {


    const [name,setName]= useState("anil")
    const [age,setAge]= useState(22);


    useEffect(()=>{
        console.warn("helloo fro hooks")
    },[])


    let data = "contect us hhfjhfjfn"
  return (

   
    <div>

        <h1>  {data} </h1>

        <h2>{name}</h2>
        <h3>{age}</h3>

        <button onClick={()=>setName('rahametanajah')}>update name</button>
        
        <button onClick={()=>setAge(0)}>update age</button>
    </div>
  )
}

export default Contect;