import * as React from "react";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from "@material-ui/core/List";
import EndpointListItem from "./EndpointListItem";

function generate(element) {
    return [0, 1, 2].map(value =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const items = [0, 1, 2].map((v) =>
    <EndpointListItem id={v}/>
);

class EndpointList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <List>
                {items}
            </List>
        )
    }
}

export default EndpointList
