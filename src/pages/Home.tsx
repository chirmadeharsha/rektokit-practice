import Products from '../components/Products'
import Box from '@material-ui/core/Box';
import { AppBar, makeStyles, Typography, styled } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navlinks0: {
    backgroundColor: '#FAF9F6',
  },
  navlinks1: {
    marginLeft: theme.spacing(2),
  },
  navlinks2: {
    marginTop: theme.spacing(1),

  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.navlinks0}>
      <Box className={classes.navlinks1}>
        <Typography variant="h6">
          Welcome to the Redux toolkit store
        </Typography>

        <Typography variant="h6">
          Products
        </Typography>
      </Box>
      <Box className={classes.navlinks2}>
        <Products />
      </Box>
    </Box>
  )
}

export default Home

