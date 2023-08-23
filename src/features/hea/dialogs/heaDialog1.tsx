import {Box,CardMedia,Grid,Typography,makeStyles} from "@material-ui/core";

import CustomCardHeader from "../components/CustomCardHeader";
import CustomFileUploader from "../components/CustomFileUploader";
import CustomInput from "../components/CustomInput";



const useStyles = makeStyles((theme) => ({
  homeCardContainer: {
    backgroundColor: "#e1ddde",
    padding: "0rem 1.0rem",
    borderRadius: "10px",
  },
  logoCardContainer: {
    paddingTop:'0.5rem',
    [theme.breakpoints.up("sm")]: {
      padding: "0.5rem 1rem",
      marginRight: "1rem",
    },
  },
  logoCardMedia: {
    borderRadius: "10px",
    border: `2px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.up("sm")]: {
      marginLeft: "50px",
      height: "8rem",
      width: "15rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "6rem",
      width: "9.4rem",
    },
  },
  cardContent: {
    [theme.breakpoints.up("sm")]: {
      padding: "0rem 4.2rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0rem 0rem",
    },
    fontWeight: "bold",
  },
  homeImageCardContainer: {
    height:"80%",
  },
  homeCardMedia: {
    borderRadius: "10px",
    maxHeight: 350
    // width: theme.spacing(60),
    // height: theme.spacing(35),
  },
  changePictureContainer: {
    marginTop: "0.5rem",
    marginBottom:'1rem',
  },
  titleContainer: {
    fontWeight: "bold",
  },
}));

const HeaDialog1 = () => {
  const classes = useStyles();
  const HomeImageURL="https://i.ibb.co/7Rzbf6d/home-Default-Image.jpg" 

  const handleInputChange = () => {
    console.log("hi")
  };

  return (
    <Box className={classes.homeCardContainer}>
      <Box className={classes.logoCardContainer} display="flex" alignItems="center">

        <CardMedia
          className={classes.logoCardMedia}
          component="img"
          src={HomeImageURL}
          alt="Home Images"
        />
       
       
        <CustomFileUploader buttonTitle="Change Logo" color="primary" />
      </Box>
      
      
      <CustomCardHeader title="YOUR HOME" />
      <Grid container  spacing={2} className={classes.cardContent}>
        <Grid item xs={12} sm={7} direction="column">
          <Typography variant="h6" className={classes.titleContainer}>
            Terraced house,48.73m<sup>2</sup> ,1892
          </Typography>
          <CustomInput
            labelName="Client Name(s)"
            name="clientName"
            handleInputChange={handleInputChange}
            value={''}
          />
           <CustomInput
            labelName="Address"
            name="address"
            handleInputChange={handleInputChange}
            value={''}
          />
          <CustomInput
            labelName="Country"
            name="country"
            handleInputChange={handleInputChange}
            value={''}
          />
          <CustomInput
            labelName="Eircode"
            name="eircode"
            handleInputChange={handleInputChange}
            value={''}
          /> 
          <Typography variant="subtitle1" className={classes.titleContainer}>
            MPRN:5
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5} className={classes.homeImageCardContainer}>
          <CardMedia
            className={classes.homeCardMedia}
            component="img"
            src={HomeImageURL}
            alt="Home Images"
          />
          <Box
            className={classes.changePictureContainer}
            justifyContent="flex-end"
            display="flex"
          >
            <CustomFileUploader buttonTitle="Change Picture" color="primary" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeaDialog1;
