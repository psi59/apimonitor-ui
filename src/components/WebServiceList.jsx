import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import WebServiceListItem from "./WebServiceListItem";
import axios from "axios";
import {getApiUrl} from "../helpers/API";
import {boxShadow, listHeaderBgColor} from "../helpers/color";
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

class WebServiceList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'listItems': [],
        };

        this.state = {
            listItem: [],
        };

        this.setListItem();
    }

    setListItem = () => {
        axios.get(getApiUrl(`v1/webservices`), {
            withCredentials: true,
        }).then((res) => {
            const data = res.data.result;
            console.log(data);
            this.setState({
                listItems: data.items.map((v) =>
                    <WebServiceListItem data={v} refreshList={this.setListItem}/>
                )
            });
        }).catch((e) => {
            console.log(e)
        });
    };

    render() {
        return (
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader
                        component="div"
                        id="nested-list-subheader"
                        disableSticky={true}
                        inset={true}
                        style={{
                            'background': listHeaderBgColor,
                            'boxShadow': boxShadow,
                        }}
                    >
                        Web Services
                        <IconButton edge="end" aria-label="more">
                            <AddCircleRoundedIcon />
                        </IconButton>
                    </ListSubheader>
                }
            >
                {this.state.listItems}
            </List>
        )
    }
}

export default WebServiceList
