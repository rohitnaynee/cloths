import React from 'react';

import HomePage from './components/homepage.component';

class App extends React.Component {
    constructor() {
        super();

    }

    render() {
        return(
            <div>
              <HomePage />
            </div>
        );
    }
}

export default App;