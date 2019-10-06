import React from 'react';
import './App.css';
import WebServiceList from "./components/WebServiceList";
import Grid from "@material-ui/core/Grid";
import EndpointList from "./components/EndpointList";
import HistoryList from "./components/HistoryList";
import DefaultStore from "./helpers/store";

const styles = {
    App: {
    }
};

const store = new DefaultStore();


function App() {
  return (
      <div className="App" style={styles.App}>
          <Grid container justify="center" spacing={1}>
              <Grid item xs={3}>
                  <WebServiceList store={store} />
              </Grid>
              <Grid item xs={3}>
                  <EndpointList  store={store} />
              </Grid>
              <Grid item xs={5}>
                  <HistoryList   store={store} />
              </Grid>
          </Grid>
      </div>
  );
}

export default App;
