import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ServiceListItem from "./ServiceListItem";
import axios from "axios";

class ServiceList extends React.Component {
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
        axios.get('http://localhost:1323/v1/webservices', {
            withCredentials: true,
        }).then((res) => {
            const data = res.data.result;
            console.log(data);
            this.setState({
                listItems: data.items.map((v) =>
                    <ServiceListItem id={v.id} host={v.host} desc={v.desc} refreshList={this.setListItem}/>
                )
            });
        }).catch((res) => {
            console.log(res)
        });
    };

    render() {
        return (
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
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

export default ServiceList
