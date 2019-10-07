import React from 'react';
import './App.css';
import WebService from "./pages/WebService";
import {Redirect, Route} from "react-router-dom";
import Endpoint from "./pages/Endpoint";
import WebServiceList from "./components/WebServiceList";
import DefaultStore from "./helpers/store";

const styles = {
    App: {
    }
};

const store = new DefaultStore();

function App() {
  return (
      <div className="App" style={styles.App}>
          <Redirect to="/services"/>
          <Route
              exact
              path="/services"
              render={(props) => (
                  <WebService {...props} store={store}/>
              )}
          />
          <Route
              exact
              path="/services/:id"
              component={Endpoint}
          />
          {/*<Grid container justify="center" spacing={1}>*/}
          {/*    <Grid item xs={3}>*/}
          {/*        <WebServiceList/>*/}
          {/*    </Grid>*/}
          {/*    <Grid item xs={3}>*/}
          {/*        <EndpointList />*/}
          {/*    </Grid>*/}
          {/*    <Grid item xs={5}>*/}
          {/*        <HistoryList />*/}
          {/*    </Grid>*/}
          {/*</Grid>*/}
          {/*<DevTools />*/}
      </div>
  );
}

export default App;
