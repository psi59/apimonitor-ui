import * as React from "react";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from '@material-ui/icons/Folder';
import List from "@material-ui/core/List";
import ServiceListItem from "./ServiceListItem";

const items = [0, 1].map((v) =>
    <ServiceListItem id={v}/>
);

class ServiceList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <List>
                {items}
            </List>
        )
    }
}

export default ServiceList
