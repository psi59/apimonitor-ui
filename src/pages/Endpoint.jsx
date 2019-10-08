import Box from "@material-ui/core/Box";
import * as React from "react";
import EndpointList from "../components/EndpointList";

class Endpoint extends React.Component {
    render() {
        return (
            <Box>
                <Box>
                    <EndpointList />
                </Box>
            </Box>
        )
    }
}

export default Endpoint;
