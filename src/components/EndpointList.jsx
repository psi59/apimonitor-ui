import * as React from "react";
import List from "@material-ui/core/List";
import EndpointListItem from "./EndpointListItem";
import axios from "axios";
import {getApiUrl} from "../helpers/API";

class EndpointList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: [],
        };
        this.setListItem();
    }

    setListItem = () => {
        axios.get(getApiUrl(`v1/endpoints?web_service_id=22`), {
            withCredentials: true,
        }).then((res) => {
            const data = res.data.result;
            this.setState({
                listItems: data.items.map((v, i) =>
                    <EndpointListItem
                        data={v}
                        index={i}
                        refreshList={this.setListItem}
                    />
                )
            });
        }).catch((e) => {
            console.log(e)
        });
    };

    render() {
        return (
            <List>
                {this.state.listItems}
            </List>
        )
    }
}

export default EndpointList
