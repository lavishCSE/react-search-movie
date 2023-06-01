import "./App.css";
import React from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  const [movie, setMovie] = useState([]);

  const [text, setText] = useState("search movie");

  const changeText = (event) => {
    setText(event.target.value);
  };

  const getMovie = (e) => {
    e.preventDefault();

    axios
      .get(`https://www.omdbapi.com/?s=${text}&apikey=207724c1`)

      .then((response) => {
        console.log(response);

        setMovie(response.data.Search);
      });
  };

  const linkOf=()=>{

    return(

      <a  href="https://moviesverse.gay/" alt=" "  />
    )
  }

  // const fetchMovie=()=>{

  //   axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=207724c1")
  //   .then((response)=>{
  //     console.log(response);
  //   })

  // }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            MovieAPP
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={getMovie}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={text}
                onChange={changeText}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      

      {/* <button onClick={fetchMovie} > Movies  </button>    */}
      {/* {

        fetchMovie.map((value,index)=>{

          return(
            <h3 key={index}>{value.Title}</h3>
         
          )
        })
      }
       */}

      <div className="container my-3">
        <div className="row">
          {

            movie.map((value,index)=>{


              return(


           <div className="col-3">
            <div className="card"  style={{width: "18rem"}}>
              <img src={value.Poster} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">{value.Title}</h3>
                <h3 className="card-text">{value.Year}</h3>

               
                <a onClick={linkOf} href="https://moviesverse.gay/" className="btn btn-primary">
                  Watch Now
                </a>
              </div>
            </div>
          </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
