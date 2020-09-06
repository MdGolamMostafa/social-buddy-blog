import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div >
      <Router>
            <Navbar/>
        <Switch>
            <Route  path="/home">
              <Home/>
            </Route>
            <Route  path="/post/:postId">
              <PostDetail/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
