import * as React from "react";
import List from "@material-ui/core/List";
import WebServiceListItem from "./WebServiceListItem";
import axios from "axios";
import {getApiUrl} from "../helpers/API";
import WebServiceEditor from "./WebServiceEditor";
import {inject, observer} from "mobx-react";

@inject('store')
@observer
class WebServiceList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: [],
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
                listItems: data.items.map((v, i) => {
                    return <WebServiceListItem
                        data={v}
                        index={i}
                        refreshList={this.setListItem}
                    />
                }),
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
            >
                {this.state.listItems}
            </List>
        )
    }
}

export default WebServiceList
