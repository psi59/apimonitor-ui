import WebServiceList from "../components/WebServiceList";
import Box from "@material-ui/core/Box";
import * as React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "react-router-dom";

const cssClasses = makeStyles({

});

class WebService extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Box>
                    <Box
                        style={{
                            padding: '8px',
                        }}
                    >
                        ApiTest
                    </Box>
                    <Box>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            <Box
                                component='span'
                            >
                                Services
                            </Box>
                            <Box
                                component='span'
                            >
                                <Button
                                    classes={cssClasses}
                                    variant="outlined"
                                    disableRipple={true}
                                    color='primary'
                                    component={Link}
                                    to="/services/new"
                                >
                                    New web service
                                </Button>
                            </Box>
                        </Grid>
                    </Box>
                    <Box>
                        <WebServiceList/>
                    </Box>
                </Box>
        )
    }
}

export default WebService;
