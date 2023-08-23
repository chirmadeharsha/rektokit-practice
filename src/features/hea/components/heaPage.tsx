import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, makeStyles, Modal, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import HeaDialog1 from "../dialogs/heaDialog1";
import HeaButton from "./CustomButton";
import CustomSlider from "../components/CustomSlider";

import { getDialogCount } from "../../../store/heaSelector";
import { updateDialogModal } from "../../../store/heaDialogModal";

// ** MATERIAL UI MAKESTYLES CHANGES
const useStyles = makeStyles((theme) => ({
  dialogModalContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "90%",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "6px 16px",
    border: "0px",
    overflowY: "auto",
    "&:focus": {
      outline: "none",
    },
  },
  buttonContainer: {
    marginTop: "0.5rem",
    height: "3rem",
    paddingTop: "0.4rem",
  },
  energyAssessmentBarContainer: {
    marginTop: "0rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  energyAssessmentTitle: {
    marginRight: "2rem",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      alignItems: "start",
    },
    fontWeight: "bold",
    overflow: "visible",
  },
  closeIcon: {
    color: theme.palette.primary.main,
  },
}));

const HeaPage: React.FC = () => {
  const dispatch = useDispatch();

  const dialogNumber = useSelector(getDialogCount);

  const classes = useStyles();

  const closeDialogModal = () => {
    dispatch(updateDialogModal({ isDialogOpened: false }));
  };

  return (
    <Modal
      open={true}
      onClose={closeDialogModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.dialogModalContainer}>
        <Box display="flex" justifyContent="end">
          <CloseIcon className={classes.closeIcon} onClick={closeDialogModal} />
        </Box>
        <Box display="flex" className={classes.energyAssessmentBarContainer}>
          <Typography
            id="energy-assessment"
            variant="h6"
            noWrap
            display="inline"
            className={classes.energyAssessmentTitle}
          >
            Home Energy Assessment
          </Typography>
          <CustomSlider dialogNumber={dialogNumber} />
        </Box>

        <HeaDialog1></HeaDialog1>

        <Box
          className={classes.buttonContainer}
          justifyContent= "space-between"
          display="flex"
        >
          <HeaButton
            variant="contained"
            color="primary"
            buttonName={dialogNumber === 1 ? "Reconfigure" : "Prev"}
          ></HeaButton>
          {dialogNumber !== 12 && (
            <HeaButton
              variant="contained"
              color="secondary"
              buttonName="Next"
            ></HeaButton>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default HeaPage;
