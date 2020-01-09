import React from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Typography, Fade } from "@material-ui/core";

import Background from "../../App/connected.png";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `url(${Background})`,
    border: "3px solid rgb(223, 202, 151)",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3),
    minWidth: "50vw",
    maxWidth: "50vw"
  },
  hr: {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    borderStyle: "solid",
    borderWidth: 1
  },
  message: {
    color: theme.palette.success.dark,
    margin: "1.5rem 5vw",
    textAlign: "center"
  }
}))

const ConfirmationModal = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [opened, setOpened] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
    setRedirect(true);
  };
  if (props.opened && !opened) {
    handleOpen();
    setOpened(true);
  }
  if (redirect) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography
              id="modal-title"
              component="h1"
              variant="h4"
              color="textSecondary"
              style={{ textAlign: "center" }}
            >
              Thank You!
            </Typography>
            <hr className={classes.hr} />
            <Typography component="p" variant="h6" className={classes.message}>
              Your connection card has been submitted! A member of the Hillcrest Staff will be in contact with you soon.
            </Typography>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default ConfirmationModal;
