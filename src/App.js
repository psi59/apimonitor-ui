import React from 'react';
import './App.css';
import ServiceList from "./components/ServiceList";
import Grid from "@material-ui/core/Grid";
import EndpointList from "./components/EndpointList";
import HistoryList from "./components/HistoryList";

const styles = {
    App: {
    }
};


function App() {
  return (
      <div className="App" style={styles.App}>
          <Grid container justify="center" spacing={1}>
              <Grid item xs={3}>
                  <ServiceList />
              </Grid>
              <Grid item xs={3}>
                  <EndpointList />
              </Grid>
              <Grid item xs={5}>
                  <HistoryList />
              </Grid>
          </Grid>
      </div>
  );
}

export default App;
