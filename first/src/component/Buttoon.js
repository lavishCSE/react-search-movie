import React from 'react'

import './Button.css';

import {useState} from 'react';

function Buttoon({message,children,onPlay,onPause}){


    const [playing, setPlaying]  = useState(false);



    function handleClick(){

        if (playing)  onPause()

        else onPlay();

        setPlaying(!playing);
    }


    return(

        <>

        {/* // <button onClick={() => alert('You clicked me!')}  className='ram'>PLAY</button> */}

        
    <button style={{display:'inline-block', width:100}}  onClick={(handleClick)}>{children} : {playing?'>':'||'} </button>

        </>


    )


}



export default Buttoon;
