
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import NotFound from './Component/Notfund/NotFound';
import PostBody from './Component/PostBody/PostBody';
import Comments from './Component/Comments/Comments';


function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path='/'>
        <Home></Home>

        </Route>
        <Route path='/home'>
        <Home></Home>

        </Route>
        <Route path='/posts/:postId'>
        <PostBody></PostBody>
       

        </Route>
        <Route path='/:postId/comments'>
          <Comments></Comments>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>

    
  
     
    </div>
  );
}

export default App;
