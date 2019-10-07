import WebServiceList from "../components/WebServiceList";
import Box from "@material-ui/core/Box";
import * as React from "react";

class WebService extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Box>
                <Box>
                    <WebServiceList/>
                </Box>
            </Box>
        )
    }
}

export default WebService;
