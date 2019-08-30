import * as React from "react";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from "@material-ui/core/Avatar";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import axios from "axios";
import {getApiUrl} from "../helpers/API";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import {CardHeader} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import {fade, makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const menuItems = [
    'Edit',
    'Delete'
];

class ServiceListItem extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            isOpenMenu: false,
            anchorEl: null,
            disabled: false,
            isEdit: false,
            values: {
                favicon: props.data.favicon,
                host: props.data.host,
                desc: props.data.desc,
            }
        };
        console.log(this.state)
    }

    toggleMenu = event => {
        this.setState({
            isOpenMenu: !this.state.isOpenMenu,
            anchorEl: event.currentTarget,
        });
    };

    showEditor = () => {
        this.toggleEditItem(true)
    };

    hideEditor = () => {
        this.toggleEditItem(false)
    };

    toggleEditItem = (isShow) => {
        this.setState({
            isEdit: isShow,
            favicon: isShow ? null : this.props.data.favicon,
        });
    };

    editService = (event) => {
        this.toggleMenu(event);
        this.showEditor();
        this.props.refreshList();
    };

    deleteService = (event) => {
        this.toggleMenu(event);
        axios.delete(
            getApiUrl(`v1/webservices/${this.props.id}`)
        ).then(function (res) {
            console.log(res);
        }).catch(function (e) {
            console.log(e);
        });
        this.props.refreshList();
    };

    setValues = (fieldName) => event => {
        this.setState({
            'values': {...this.state.values, [fieldName]: event.target.value},
        })
    };

    getHostFirstLetterUppercase = () => {
        return String(this.props.data.host).charAt(0);
    };

    getDisplayNone = (isNone) => {
        return {
            'display': isNone ? 'none' : 'contents',
        };
    };

    updateWebservice = () => {
        const requestData = {
            'host': this.state.values.host,
            'desc': this.state.values.desc,
            'favicon': 'https://realsangil.github.io/assets/images/blog/bio-photo.png'
        };

        const refesh = this.props.refreshList;
        const hideEditor = this.hideEditor;

        axios.put(
            getApiUrl(`v1/webservices/${this.props.data.id}`),
            requestData,
        ).then(
            function (res) {
                console.log(res);
                hideEditor();
                refesh();
            }
        ).catch(function (e) {
            console.log(e);
        });
    };

    render() {
        return (
                <ListItem id={this.props.data.id}>
                    <div
                        style={this.getDisplayNone(this.state.isEdit)}
                    >
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
                    <div
                        style={this.getDisplayNone(!this.state.isEdit)}
                    >
                        <Card
                            style={{
                                flexWrap: 'wrap',
                                'width': '100%',
                            }}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar>
                                        <Fab
                                            color="primary"
                                            aria-label="add"
                                            className='addFaviconBtn'
                                        >
                                            <AddIcon />
                                        </Fab>
                                    </Avatar>
                                }
                                title={
                                    <TextField
                                        id="standard-name"
                                        label="host"
                                        defaultValue={this.state.values.host}
                                        onChange={this.setValues('host')}
                                        margin="normal"
                                        variant="filled"
                                        fullWidth={true}
                                    />
                                }
                            />
                            <CardContent>
                                <TextField
                                    id="standard-name"
                                    label="desc"
                                    rows="4"
                                    value={this.state.values.desc}
                                    onChange={this.setValues('desc')}
                                    fullWidth={true}
                                    margin="none"
                                    variant="filled"
                                    multiline
                                />
                            </CardContent>
                            <CardActions style={{justifyContent: 'flex-end'}}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size='small'
                                    onClick={this.updateWebservice}
                                >
                                    Confirm
                                </Button>
                                <Button
                                    variant="contained"
                                    size='small'
                                    onClick={this.hideEditor}
                                >
                                    Cancel
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </ListItem>
        )
    }
}

export default ServiceListItem
