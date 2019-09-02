import * as React from "react";
import {CardHeader} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import axios from "axios";
import {getApiUrl} from "../helpers/API";

class WebServiceEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            host: props.data.host,
            desc: props.data.desc,
        }
    }

    setValues = (fieldName) => event => {
        this.setState({
            [fieldName]: event.target.value,
        })
    };

    addWebservice = () => {
        const requestData = {
            'host': this.state.host,
            'desc': this.state.desc,
            'favicon': 'https://realsangil.github.io/assets/images/blog/bio-photo.png'
        };

        const refesh = this.props.refreshList;
        const hideEditor = this.hideEditor;

        axios.post(
            getApiUrl(`v1/webservices`),
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

    updateWebservice = () => {
        const requestData = {
            'host': this.state.host,
            'desc': this.state.desc,
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

    confirm = this.props.isAddWebService ? this.addWebservice : this.updateWebservice;

    hideEditor = () => {
      this.props.toggleIsEdit();
      this.props.refreshList();
    };

    render() {
        return (
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
                            defaultValue={this.state.host}
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
                        value={this.state.desc}
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
                        onClick={this.confirm}
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
        );
    }
}

export default WebServiceEditor;
