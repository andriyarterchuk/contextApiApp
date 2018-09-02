import React, { Component } from 'react';
import { AppProvider, AppConsumer } from "../src/context/AppContext";
import './App.css';

class App extends Component {
  render() {
    return (
      <AppProvider>
        <AppConsumer>
          {({ coordinates }) => (
            <div>
              <h3>Coordinates</h3>
              {coordinates.map((item, index) => (
                <div key={index}>
                  {`${index + 1}) latitude: ${item.lat}, longitude: ${item.long}`}
                </div>
              ))}
            </div >
          )
          }
        </AppConsumer>
      </AppProvider>
    );
  }
}

export default App;
