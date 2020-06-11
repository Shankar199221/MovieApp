import React,{useState} from 'react'
import Axios from 'axios'
import './MovieFullPoster.css'


function MovieFullPost() {
    const [name,setName] = useState('evil');
    const [year,setYear] =useState('');
    const [movie,setMovie] =useState('')

 const getData =async (name , year)=>{
       const data = await Axios.get(`http://www.omdbapi.com/?t=${name}&y=${year}&plot=full&apikey=3e9fa36c`)
        console.log(data)  
        setMovie(data.data)
        console.log(movie) 
 }     
  
   
  const handleSubmit=(e)=>{
         e.preventDefault();
         if(name === "" || year === "")  return null
        
         getData(name,year)
  }
 
 return (
     <div className="container-fluid ">
        <div className="row"> 
                   <div className="col-12 backgrond">
                   <div className="header-form ">
                    <form onSubmit={handleSubmit}>
                           <div className="form-box">
                                 <input  type="text" className="form-fied movie" placeholder="Enter movie name" value={name} onChange={(e)=>setName(e.target.value)}/>
                                 <input  type="text" className="form-fied  year" placeholder="Enter movie Year" value={year} onChange={(e)=> setYear(e.target.value)}/>
                                 <button className="search-btn">Search</button>
                            </div>        
                        </form>
                   </div>
                   </div>
                  
         </div>
                <hr />
        <div className="row"> <h1> Movie Full Details</h1></div>
        <div className="row">
            <div className="col-1"></div>
            <div className="col-9"> 
              <div className="moviedata">
                    {movie && (
                            <div className="movieFullcard">
                               <div className="row">
                                    <div className="col-4">
                                       <img src={movie.Poster} alt="Avatar" width="300rem" height="300rem"/>
                                    </div>
                                    <div className="col-8">
                                            <h1>Title :{movie.Title}</h1>
                                            <h2>Genre :{movie.Genre}</h2>
                                            <h2>Released Date:{movie.Released}</h2>
                                            <h2>imdbRating :{movie.imdbRating}</h2>  
                                            <h2>Languages :{movie.Language}</h2>
                                            <hr />
                                            <span className="pr-5">Runtime :{movie.Runtime}</span>
                                            <span className="spanleft text-warning">imdbVotes :{movie.imdbVotes}</span>
                                            
                                    </div>
                                          
                                </div>
                                <div className="row">
                                   <div className="col-12">
                                      <div className="des">
                                        <h3 className="text-success">Descrption ::</h3>
                                        </div>
                                        <h2 className="text-white font-bolder">Awards : {movie.Awards}</h2>
                                        <h3 className="text-white">Writer :{movie.Writer}</h3>
                                        <h4 className="text-white">{movie.Plot}</h4>
                                   </div>
                                </div>
                            </div>
                       
                    )} 
               
              </div>
         </div>
            <div className="col-2"></div>
        </div>
        
      </div>

 );
}

export default MovieFullPost
