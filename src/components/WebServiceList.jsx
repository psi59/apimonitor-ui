import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import WebServiceListItem from "./WebServiceListItem";
import axios from "axios";
import {getApiUrl} from "../helpers/API";
import {boxShadow, listHeaderBgColor} from "../helpers/color";
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import WebServiceEditor from "./WebServiceEditor";

class WebServiceList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: [],
            // selectedWebService: null,
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
                listItems: data.items.map((v, i) =>
                    <WebServiceListItem
                        data={v}
                        index={i}
                        refreshList={this.setListItem}
                    />
                ),
                // selectedWebService: data.items.length > 0 ? data.items[0] : null
            });
        }).catch((e) => {
            console.log(e)
        });
    };

    addWebService = (e) => {
        e.preventDefault();
        console.log(this.state.listItems);
        this.setState({
            listItems: [<WebServiceEditor
                isAddWebService={true}
                toggleIsEdit={() => {
                    this.setState({
                        listItems: [...this.state.listItems.slice(1)],
                    })
                }}
                refreshList={this.setListItem}
                data={{
                    id: 0,
                    host: '',
                    desc: '',
                }}
            />, ...this.state.listItems],
        })
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
                        <IconButton
                            edge="end"
                            aria-label="more"
                            onClick={this.addWebService}
                        >
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
