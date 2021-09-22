import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/pages/Home';
import Artists from './components/pages/Artists';
import Songs from './components/pages/Songs';
import Header from './components/blocks/Header/Header';
import Footer from './components/blocks/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
        <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/artists">
                <Artists />
              </Route>
              <Route path="/songs">
                <Songs />
              </Route>
            </Switch>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
