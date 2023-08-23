import { Slider, makeStyles, Box } from "@material-ui/core";

import { sliderMarks } from "../../../common/common";

// ** MATERIAL UI MAKESTYLES CHANGES And Customizing Material UI Slider Classes
const useStyles = makeStyles((theme) => ({
  sliderContainer: {
    width: "100%",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      alignItems: "start",
      height: "5rem",
    },
    "& .MuiSlider-root": {
      color: "#e0dfe0",
      display: "flex",
      alignItems: "center",
      width: "95%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: "0rem 0.2rem",
      },
    },
    "& .MuiSlider-track": {
      height: "8px",
      color: theme.palette.secondary.main,
      marginLeft: "-0.3rem",
      paddingRight: "0.5rem",
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "10px",
    },
    "& .MuiSlider-rail": {
      height: "8px",
      paddingRight: "0.6rem",
      borderRadius: "10px",
    },
    "& .MuiSlider-thumb": {
      width: "21px",
      height: "21px",
      marginTop: "0px",
      color: theme.palette.secondary.main,
    },
    "& .MuiSlider-mark": {
      width: "4px",
      height: "4px",
      position: "absolute",
      borderRadius: "100%",
      color: "white",
    },
  },
}));

type CustomSliderProps = {
  dialogNumber: number;
};

const CustomSlider = ({ dialogNumber }: CustomSliderProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.sliderContainer}>
      <Slider
        value={dialogNumber}
        onChange={(event, newValue) => {}}
        aria-labelledby="discrete-slider"
        step={1}
        aria-label="Custom marks"
        marks={sliderMarks}
        min={1}
        max={12}
      />
    </Box>
  );
};

export default CustomSlider;
