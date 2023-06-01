import React from 'react'

class About extends React.Component{

    constructor(){

        super();

        this.state={

            name :'anil',
            age:23
        }

        console.warn("constructor");
    }

    componentDidMount(){

        console.warn("did mount");
    }


    componentDidUpdate(){

       alert("data updated");

    }


    render(){
        return(
          
            <div>

                <h1> this is component</h1>

                <h2>{this.state.name}</h2>
                <h2>{this.state.age}</h2>

                <button onClick={()=>{this.setState({name:'anil sidhu'})}}> update state</button>
            </div>

            
        )
    }
}

export default About;