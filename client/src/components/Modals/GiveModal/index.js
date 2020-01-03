import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import { Link, useMediaQuery } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';

function GiveModal() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link color="textPrimary" onClick={handleClickOpen}>Give</Link>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
      >
        <DialogActions>
          <IconButton onClick={handleClose} color="primary" aria-label="close">
            <Close />
          </IconButton>
        </DialogActions>

        <DialogTitle id="dialog-title" style={{textAlign: "center"}}>
          <Typography variant="subtitle1" color="primary">{"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."}</Typography>
          <Typography variant="subtitle2" color="secondary">{"2 Corinthians 9:6-8"}</Typography>
        </DialogTitle>
        <DialogContent>
          <a href="https://hillcrestcharlotte.churchcenter.com/giving?open-in-church-center-modal=true">Hillcrest Donation</a>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default GiveModal;