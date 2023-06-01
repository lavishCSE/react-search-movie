import Video from "./component/Video";

import "./App.css";

import Buttoon from "./component/Buttoon";
import Events from "./component/Events";

import Counter from "./component/Counter";
import { useState } from "react";



// import {xooo} from './component/Data';

function App(props) {

  const [video,setVideo]=useState();

  


  const levels =[]


  let obj = {

    title:"reactjs tutorial",
        views:"50K",
        time:" 300Hr",
        channel:" popye",
        verified:"true"
  };


  return (

    <div className="App" onClick ={()=>levels.push('App')}>
      <div className="main">


        <Events></Events>
        <h1>VIDEOS</h1>
      </div>
      <Video
        {...obj}
      ></Video>
      <Video
        title="nodemon tutorial"
        views="300K"
        time=" 40Hr"
        verified={true}
      
      ></Video>
      <Video
        title="rampat tutorial"
        views="700K"
        time=" 90Hr"
        channel="popye"
        verified={false}
      ></Video>

       <div >
       <Buttoon message="playing" onPlay={() => alert('You clicked me!')}  onPause={() => alert('You pause me baby')}  >PLAY</Buttoon>

      <Buttoon message="playing" onPlay={() => alert('You clicked me!')}  onPause={() => alert('You pause me baby')}  >PLAY</Buttoon>
      <Buttoon message="playing" onPlay={() => alert('You clicked me!')}  onPause={() => alert('You pause me baby')}  >PLAY</Buttoon>

       {/* <Buttoon  message="okbro" onKuch={() => console.log('You clicked me!')} >Pause</Buttoon> */}


       </div>


       <Counter></Counter>
      


  
    </div>
  );
}



// export default function List() {
//   const listItems = xooo.map(person =>
//     <li key={person.id}>
      
      
//         <b>{person.name}</b>

//         {person.age}
          
      
//     </li>
//   );
//   return <ul>{listItems}</ul>;
// }


export default App;

