import React from 'react';
import MovieFullPost from './component/MovieFullPoster/MovieFullPost';
import MovieList from './component/MovieList/MovieList';
import { Switch,BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './component/Home';


function App() {
   return(
     <Router>
        <div className="container-fluid app">
        <div className="row">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/movelist" component={MovieList} />
                    <Route exact path="/moviefullpost" component={MovieFullPost} />
                </Switch>
        </div>
      
       
     </div>
     </Router>
    
   )
}

export default App;
