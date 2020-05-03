import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import './app.css';




const SneakersPage = () => (
    <div>
      <h1> SNEAKERS PAGE </h1>
    </div>
);



class App extends React.Component {


    render() {
        return(
         <div>
          <Switch>
            <Route  path = '/sneakers' component = {SneakersPage}    />
            <Route exact  path = '/' component = {HomePage} />
          </Switch>
         </div>
        );
    }
}

export default App;