import * as React from "react";
import ListItem from "@material-ui/core/ListItem";import axios from "axios";
import {getApiUrl} from "../helpers/API";
import WebServiceListItemView from "./WebServiceListItemView";
import WebServiceEditor from "./WebServiceEditor";

const menuItems = [
    'Edit',
    'Delete'
];

class WebServiceListItem extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            isEdit: false,
        };
    }

    toggleIsEdit = () => {
        console.log(this.state.isEdit);
        this.setState({
            isEdit: !this.state.isEdit,
        })
    };

    render() {
        return (
            <ListItem id={this.props.data.id}>
                {this.state.isEdit ? <WebServiceEditor
                    data={this.props.data}
                    toggleIsEdit={this.toggleIsEdit}
                    refreshList={this.props.refreshList}
                /> : <WebServiceListItemView
                    data={this.props.data}
                    toggleIsEdit={this.toggleIsEdit}
                    refreshList={this.props.refreshList}
                />}
            </ListItem>
        )
    }
}

export default WebServiceListItem
