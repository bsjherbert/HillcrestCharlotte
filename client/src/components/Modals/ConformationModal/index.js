import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import Background from "../../App/connected.png";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

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
    padding: theme.spacing(2, 4, 3)
  },
  hr: {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    borderStyle: "solid",
    borderWidth: 1
  },
  days: {
    color: "#473d2e"
  }
}));
const TimeLocationModal = props => {
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
    return <Redirect to={{ pathname: "/" }} />;
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
              variant="h4"
              color="textSecondary"
              style={{ textAlign: "center" }}
            >
              Success!!!
            </Typography>
            <hr className={classes.hr} />
            <div id="modal-description" style={{ textAlign: "center" }}>
              <Button component={Link} to="/" color="primary">
                Go Home
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default TimeLocationModal;
