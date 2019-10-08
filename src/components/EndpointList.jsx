import * as React from "react";
import List from "@material-ui/core/List";
import EndpointListItem from "./EndpointListItem";
import axios from "axios";
import {getApiUrl} from "../helpers/API";
import {inject, observer} from "mobx-react";

const webServiceIdRegExp = new RegExp(`\/services\/(\\w+)`);

@inject('store')
@observer
class EndpointList extends React.Component {
    constructor(props) {
        super(props);
        const parsedPath = webServiceIdRegExp.exec(window.location.pathname);
        let webServiceId = 0;
        if (parsedPath.length === 2 ) {
            webServiceId = parsedPath[1]
        }
        this.state = {
            listItems: [],
            webServiceId: webServiceId,
        };
        this.setListItem();
    }

    setListItem = () => {
        axios.get(getApiUrl(`v1/endpoints?web_service_id=${this.state.webServiceId}`), {
            withCredentials: true,
        }).then((res) => {
            const data = res.data.result;
            this.setState({
                listItems: data.items.map((v) => {
                    return <EndpointListItem
                        data={v}
                        refreshList={this.setListItem}
                    />
                })
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
