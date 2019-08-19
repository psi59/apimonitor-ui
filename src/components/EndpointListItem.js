import * as React from "react";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from "@material-ui/core/List";

class EndpointListItem extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return (
            <ListItem>
                <ListItemText
                    id={this.props.key}
                    primary="Single-line item"
                    secondary={'Secondary text'}
                />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="more">
                        <MoreVertIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }

}

export default EndpointListItem
