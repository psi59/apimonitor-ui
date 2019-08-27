import * as React from "react";
import List from "@material-ui/core/List";
import EndpointListItem from "./EndpointListItem";

const items = [0, 1, 2].map((v) =>
    <EndpointListItem list_index={v}/>
);

class EndpointList extends React.Component {
    render() {
        return (
            <List>
                {items}
            </List>
        )
    }
}

export default EndpointList
