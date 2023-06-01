import {useState} from 'react';


const Counter =()=>{


    const [number, setNumber]= useState(0);

     function handleClick(e){
        e.stopPropagation();

        setTimeout(()=>{

            setNumber(number=> number+1)


        },5000)

        

        console.log(number)

    }


    return(
        <>
        <h1>{number}</h1>

        <button  onClick={handleClick}>ADD</button>

        </>
    )
}


export default Counter;


