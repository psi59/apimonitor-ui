import * as React from "react";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import EndpointDialog from "./EndpointDialog";

export default function EndpointListItem(props) {
    const [dialogOpen, setDialogOpen] = React.useState(false);

    const openDialog = () => {
        setDialogOpen(true);
        console.log(`openDialogOpen='${dialogOpen}'`)
    };

    const closeDialog = () => {
        setDialogOpen(false);
        console.log(`closeDialogOpen='${dialogOpen}'`)
    };

    return <ListItem
        divider={true}
        button={true}
        selected={ props.index === 0 }
    >
        <EndpointDialog
            open={dialogOpen}
            closeDialog={closeDialog}
        />
        <ListItemIcon>
            <Avatar
                style={{
                    backgroundColor: "transparent",
                    fontSize: "0.3rem",
                    color: "#000"}}
                >
                {props.data.http_method}
            </Avatar>
        </ListItemIcon>
        <ListItemText
            id={props.key}
            primary={props.data.path}
            secondary={props.data.url}
        />
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="more"
                        onClick={openDialog}>
                <MoreVertIcon />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>;
}

// class EndpointListItem extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     // }
//
//     render() {
//         return (
//             <ListItem
//                 onClick={openDialog}
//                 divider={true}
//                 button={true}
//             >
//                 <EndpointDialog
//                     open={dialogOpen}
//                     closeDialog={closeDialog}
//                 />
//                 <ListItemIcon>
//                     <Avatar
//                         style={{
//                             backgroundColor: "transparent",
//                             fontSize: "0.3rem",
//                             color: "#000"}}
//                     >
//                         {props.data.http_method}
//                     </Avatar>
//                 </ListItemIcon>
//                 <ListItemText
//                     id={props.key}
//                     primary={props.data.path}
//                     secondary={props.data.url}
//                 />
//                 <ListItemSecondaryAction>
//                     <IconButton edge="end" aria-label="more">
//                         <MoreVertIcon />
//                     </IconButton>
//                 </ListItemSecondaryAction>
//             </ListItem>
//         )
//     }
//
// }
//
// export default EndpointListItem
