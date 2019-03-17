import React, { Component } from 'react';
import InfoPanel from './Components/Info-Panel/InfoPanel';
import DetailTabPanel from './Components/Detail-TabPanel/DetailTabPanel';

class App extends Component {
    render() {
        return (
            <div className="App">
                <InfoPanel></InfoPanel>
                <DetailTabPanel></DetailTabPanel>
            </div>
        );
    }
}

export default App;
