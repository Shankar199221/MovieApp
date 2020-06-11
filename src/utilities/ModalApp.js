import React,{useState,useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Axios from 'axios'

  function ModalApp(props) {
    const [modalShow, setModalShow] =useState(false);
    const [movie,setMovie] = useState({})
      console.log(props.Title,"Modalll")
      console.log(props.Year,"Modalll")

      const getDataFromApi =async (name , year)=>{
         
             
        const data = await Axios.get(`http://www.omdbapi.com/?t=${name}&y=${year}&plot=full&apikey=3e9fa36c`)
         console.log(data)  
         setMovie(data.data)
         console.log(movie) 
  }    
  

    useEffect(()=>{
        getDataFromApi(props.Title,props.Year);
    },[props.Title,props.Year])
       
   


    const MyVerticallyCenteredModal=(props)=> {
        
        const imdbRating = Math.floor(props.items.imdbRating);
        const moviecolor = props.items.imdbRating >= 7? "success" : "danger"
        console.log(imdbRating)
        return (
          
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
               Movie Details
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
             
             {props.items ?(
                <div className="card">
                  <img src={props.items.Poster} alt="mage" width="200rem" height="300rem" />
                  <h2>{props.items.Title}</h2>
                  <bold>Boxoffice :</bold> <h2 className={moviecolor}> {imdbRating >= 7? "Hit Movie" : "Flap Movie"} </h2>
                  <h2>Rating:{props.items.imdbRating} </h2>
                </div>
                
             ): null}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          More Info
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
           items={movie}
        />
      </>
    );
  }
  
export default ModalApp