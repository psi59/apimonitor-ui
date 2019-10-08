import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import {inject, observer} from "mobx-react";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios";
import {getApiUrl} from "../helpers/API";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {black, blue, red} from "../helpers/colors/color";

@inject('store')
@observer
class WebServiceListItem extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            openDialog: false,
            anchorEl: null,
        }
    }

    openDialog = () => {
        console.log('openDialog');
        this.setState({openDialog: true})
    };

    closeDialog = () => {
        console.log('closeDialog');
        this.setState({openDialog: false})
    };

    getHostFirstLetterUppercase = () => {
        return String(this.props.data.host).charAt(0);
    };

    deleteService = (event) => {
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
            <ListItem
                id={this.props.data.id}
                disableRipple={true}
                style={{
                    border: `1px solid #ccc`,
                    borderRadius: '.25rem',
                }}
            >
                <ListItemAvatar>
                    <Avatar
                        src={this.props.data.favicon}
                    >
                        {this.getHostFirstLetterUppercase()}
                    </Avatar>
                </ListItemAvatar>

                <ListItemText
                    primary={
                        <Link
                            to={`/services/${this.props.data.id}`}
                            style={{
                                color: blue
                            }}
                        >
                            {this.props.data.host}
                        </Link>
                    }
                    secondary={this.props.data.desc}
                />

                <ListItemSecondaryAction>
                    <IconButton
                        edge="end"
                        aria-label="more"
                        disableRipple={true}
                        onClick={this.openDialog}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>


                <Dialog
                    open={this.state.openDialog}
                    onClose={this.closeDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {`삭제하시겠습니까?`}
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={this.closeDialog} color="primary" autoFocus>
                            취소
                        </Button>
                        <Button onClick={this.deleteService} color="primary">
                            삭제
                        </Button>
                    </DialogActions>
                </Dialog>
            </ListItem>
        )
    }
}

export default WebServiceListItem
