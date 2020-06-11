import React,{useState} from 'react'
import './MovieList.css'
import Pagination from "react-js-pagination";

import Axios from 'axios'
import ModalApp from '../../utilities/ModalApp';
function MovieList() {
    const [name,setName] = useState('');
    const [year,setYear] =useState('');
    const [posts,setPosts] =useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [loading, setLoading] = useState(false);
    // const [error,setError] =useState(false)

    const getData =async (name, year)=>{
        setLoading(true);
        const data = await Axios.get(`http://www.omdbapi.com/?s=${name}&y=${year}&apikey=3e9fa36c`)
          console.log(data)
          if(data.data.Response === "True"){
                setPosts(data.data.Search)
                console.log(data.data.Response)
                setLoading(false);  
          }
          if(data.data.Response ==="False"){
              setPosts([])
              
          }
              
        
          
  }    
       
          
        const handleSubmit=(e)=>{
            e.preventDefault();
             if(name === "" || year === "")  return null
            getData(name,year)
        }

        const handlePageChange=(pageNumber)=>{
            setCurrentPage(pageNumber)  
        }
      
     // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    return (
        <>
           <div className="container-fluid">
                
                <div className="row"> 
                   <div className="col-12 backgrond">
                   <div className="form-header ">
                    <form onSubmit={handleSubmit} className="">
                        <h2 className="subheading">Find The <span>movies</span> Which Your <span>Love</span></h2>
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
                    <div className="row"><h1 className="header">MovieList</h1></div>
               
              

                {loading  ?  <h2>Loading...</h2>:( currentPosts.map((item)=>{
                    return (
                        <div key={item.imdbID}>
                            <div className="items">
                                <h1>{item.Title}</h1>
                                <ModalApp Title={item.Title} Year={item.Year} />
                            </div>
                        </div>
                    ) 
                }))
            }
          
                      <div  className="pagination">
                            <Pagination 
                                    hideDisabled

                                    prevPageText='prev'
                                    nextPageText='next'
                                    activePage={currentPage}
                                    itemsCountPerPage={postsPerPage}
                                    totalItemsCount={posts?posts.length:0}
                                    pageRangeDisplayed={5}
                                    onChange={handlePageChange}
                                />
                      </div>
            </div>
        </>
    )
}

export default MovieList
