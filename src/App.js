import React from 'react';
import './App.css';
import WebService from "./pages/WebService";
import {Route} from "react-router-dom";
import Endpoint from "./pages/Endpoint";
import DefaultStore from "./helpers/store";
import {Container, createMuiTheme} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/styles';
import {blue} from "@material-ui/core/colors";
import CreateWebService from "./pages/CreateWebService";


const styles = {
    App: {
    }
};

const theme = createMuiTheme({
    palette: {
        primary: {
          main: blue[500],
        },
        secondary: {
            main: blue[500],
        },
    },
});

const store = new DefaultStore();

function App() {
  return (
      <div className="App" style={styles.App}>
          <ThemeProvider theme={theme}>
              <Container
                  maxWidth="md"
              >
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
                  <Route
                    exact
                    path="/services/new"
                    component={CreateWebService}
                  />
              </Container>
          </ThemeProvider>
      </div>
  );
}

export default App;
