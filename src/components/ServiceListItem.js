import * as React from "react";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from '@material-ui/icons/Folder';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import axios from "axios";

const menuItems = [
    'Edit',
    'Delete'
];

class ServiceListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenMenu: false,
            anchorEl: null,
        }
    }

    toggleMenu = event => {
        this.setState({
            isOpenMenu: !this.state.isOpenMenu,
            anchorEl: event.currentTarget,
        });
    };

    editService = (event) => {
        this.toggleMenu(event);
        this.props.refreshList();
    };

    deleteService = (event) => {
        this.toggleMenu(event);
        axios.delete(
            `http://localhost:1323/v1/webservices/${this.props.id}`
        ).then(function (res) {
            console.log(res);
        }).catch(function (e) {
            console.log(e);
        });
        this.props.refreshList();
    };

    render() {
        console.log(this.props);
        return (
                <ListItem id={this.props.id}>
                    <ListItemAvatar>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={`${this.props.id}. ${this.props.host}`}
                        secondary={this.props.desc}
                    />
                    <ListItemSecondaryAction>
                        <Menu
                            id="long-menu"
                            anchorEl={this.state.anchorEl}
                            keepMounted
                            open={this.state.isOpenMenu}
                            onClose={this.toggleMenu}
                        >
                            <MenuItem
                                key='editBtn'
                                onClick={this.editService}
                            >
                                Edit
                            </MenuItem>
                            <MenuItem
                                key='deleteBtn'
                                onClick={this.deleteService}
                            >
                                Delete
                            </MenuItem>
                        </Menu>
                        <IconButton edge="end" aria-label="more" onClick={this.toggleMenu}>
                            <MoreVertIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
        )
    }
}

export default ServiceListItem
