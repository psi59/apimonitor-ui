import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";

function generate(element) {
    return [0, 1, 2, 3, 4, 5].map(value =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

class HistoryList extends React.Component {
     render() {
        return (
            <List>
                {generate(
                    <ListItem divider={true}>
                        <ListItemText
                            primary="Single-line item"
                            secondary={'Secondary text'}
                        />
                    </ListItem>,
                )}
            </List>
        )
    }
}

export default HistoryList
