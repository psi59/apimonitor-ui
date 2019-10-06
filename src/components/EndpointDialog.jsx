import Dialog from "@material-ui/core/Dialog";
import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

export default function EndpointDialog(props) {
    return <Dialog
        open={props.open}
        onClose={props.closeDialog}
        aria-labelledby="form-dialog-title"
    >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
            <DialogContentText>
                To subscribe to this website, please enter your email address here. We will send updates
                occasionally.
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidthw
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={props.closeDialog} color="primary">
                Cancel
            </Button>
        </DialogActions>
    </Dialog>
}
