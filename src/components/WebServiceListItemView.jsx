import * as React from "react";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import axios from "axios";
import {getApiUrl} from "../helpers/API";

class WebServiceListItemView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpenMenu: false,
            anchorEl: null,
        }
    }

    getHostFirstLetterUppercase = () => {
        return String(this.props.data.host).charAt(0);
    };

    toggleMenu = event => {
        this.setState({
            isOpenMenu: !this.state.isOpenMenu,
            anchorEl: event.currentTarget,
        });
    };

    editService = (event) => {
        this.toggleMenu(event);
        this.props.toggleIsEdit();
        this.props.refreshList();
    };


    deleteService = (event) => {
        this.toggleMenu(event);
        const refresh = this.props.refreshList;
        axios.delete(
            getApiUrl(`v1/webservices/${this.props.data.id}`)
        ).then(function (res) {
            console.log(res);
            refresh();
        }).catch(function (e) {
            console.log(e);
        });
    };

    render() {
        return (
            <div style={{
                "display": "flex",
            }}>
                <ListItemAvatar>
                    <Avatar
                        src={this.props.data.favicon}
                    >
                        {this.getHostFirstLetterUppercase()}
                    </Avatar>
                </ListItemAvatar>

                <ListItemText
                    primary={this.props.data.host}
                    secondary={this.props.data.desc}
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
            </div>
        )
    }
}

export default WebServiceListItemView;
