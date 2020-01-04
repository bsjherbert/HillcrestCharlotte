import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Link, Typography } from '@material-ui/core';

import Background from '../../App/connected.png';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `url(${Background})`,
    border: '3px solid rgb(223, 202, 151)',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  hr: {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    borderStyle: "solid",
    borderWidth: 1
  },
  days: {
    color: "#473d2e",
  }
}));

function TimeLocationModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link color="primary" onClick={handleOpen}>Times & Location</Link>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography id="modal-title" variant="h4" color="textSecondary" style={{textAlign: "center"}}>
              Come Join Us!
            </Typography>
            <hr className={classes.hr} />
            <div id="modal-description" style={{textAlign: "center"}}>
              <Typography variant="h6" className={classes.days}>SUNDAYS</Typography>
              <Typography component="p">09:30am - Sunday School</Typography>
              <Typography component="p" style={{marginBottom: "1rem"}}>11:00am - Worship Service</Typography>

              <Typography variant="h6" className={classes.days}>WEDNESDAYS</Typography>
              <Typography component="p" style={{marginBottom: "1rem"}}>06:30pm - Midweek Bible Study</Typography>
        
              <Typography variant="h6" color="textSecondary" style={{textAlign: "center", fontWeight: "bold"}}>LOCATION</Typography>
              <Typography component="p" style={{marginBottom: "1rem"}}>
                8501 Bellhaven Boulevard<br/>
                Charlotte, NC 28214
              </Typography>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13024.16625612807!2d-80.9475353!3d35.3049487!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a3830ac763a1%3A0xd79f35dcaf9153b1!2sHillcrest%20Baptist%20Church!5e0!3m2!1sen!2sus!4v1577998566409!5m2!1sen!2sus"
              width="500" height="300" title="Hillcrest Google Maps Location"></iframe>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default TimeLocationModal;