const Events = ({}) => {


    function handlClick(){

        window.print();

        
    }


    const handleMouseOver= ()=>{

        console.log('hiii giii giiktbf ')
        
    }

    const cut = (e)=>{

        

        alert("hi m to mar gye")

    }


    return(


        <div>


<button  onClick={handlClick}> Submit </button>

<input onCopy={cut} type="text" name =""   id=""/>
<img   onMouseOver={handleMouseOver}  scr ="https://i.imgur.com/MK3eW3As.jpg" alt="hiiiii"/>


        </div>

    )
}


export  default Events;