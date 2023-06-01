import "./video.css";

function Video({ title,channel,views,time, verified }) {


  return (
    <>
      <div className="container">
        <div className="pic">
          <img
            
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson"
          />

          <div className= "title"> {title} </div>

          {verified ? <div className= "channel"> {channel} ✅ </div> 
                         :  <div className= "channel"> {channel}  </div>  }

                {/* <div className= "channel"> {channel }{verified ? '✅ ' : null} </div>               */}

                {/* <div className= "channel"> {channel }{verified && '✅' } </div>  */}
          
          <div className= "views">VIEWS {views} <span>.</span> watching {time} </div>

        </div>
<div>

<button onClick={() => {
  alert('You clicked me!');
}}>   Button on Click </button>
</div>
        
      </div>
    </>
  );
}

export default Video;





