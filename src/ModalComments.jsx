import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {Button,Modal,Typography} from "@mui/material";


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none"
  }
}));

function SimpleModal(props) {
  const [open, setOpen] = useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [modalData, setData] = useState();

  const data = [
    {
      title: "Payment Terms",
      Info: "Pay me"
    },
    {
      title: "Seller Terms",
      Info: "Pay me now"
    },
    {
      title: "Inspection",
      Info: "Inspection Details"
    },
    {
      title: "Shipping/Pickup",
      Info: "Just come get it"
    }
  ];
  const CustomModal = () => {
    return modalData ? (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            {modalData}
          </Typography>
         
        </div>
      </Modal>
    ) : null;
  };

  const handleOpen = () => {
    setOpen(true);
    setData(props.comments);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <div>
      
          <Button
            onClick={() => {
              handleOpen();
            }}
          >
            click
          </Button>

      <CustomModal />
    </div>
   );
}

export default SimpleModal;