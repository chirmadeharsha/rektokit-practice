import { useGetAllProductQuery } from '../redux/ProductApi'
import { addItems } from '../redux/features/cart/cartSlice'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';
import { Paper } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import Box from '@material-ui/core/Box';
import { makeStyles, Typography, useTheme, withStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  img1: {
    width: '50%',
    height: '80%'
  },
  customBorderRadius: {
    borderRadius: 15,
    margin: theme.spacing(1),
    width: theme.spacing(40),
    height: theme.spacing(50),
  }
}));

const ColorButton = withStyles((theme) => ({
  root: {
    alignContent: 'center',
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const Products = () => {
  const classes = useStyles();
  const theme = useTheme();

  const { status, data } = useGetAllProductQuery("");
  console.log("fetchData", data)
  const dispatch = useAppDispatch();
  const handleAdd = (product: any) => {
    console.log("product check", product)
    dispatch(addItems(product));
  }

  return (
    <Grid container spacing={3} >
      {data && data.products && data.products.map((product: any) => (
        <Grid item key={product.id} xs={12} sm={3}>
          <Paper className={classes.customBorderRadius} elevation={15}>
            <Box style={{ height: '2%' }} />
            <Grid container direction="column" alignItems="center" style={{ height: '40%', marginTop: theme.spacing(2), }}>
              <img className={classes.img1} src={product.images[0]} alt={product.title} />
            </Grid>
            <Grid container direction="column" alignItems="center" justifyContent='center' style={{ height: '18%' }}>
              <Typography variant="body1" style={{ fontSize: 13, marginLeft: theme.spacing(1) }} gutterBottom>
                {product.title}
              </Typography>
            </Grid>
            <Grid container direction="column" alignItems="center" style={{ height: '10%' }}>
              <Typography variant="body1" gutterBottom>
                {product.price}
              </Typography>
            </Grid>
            <Grid container direction="column" alignItems="center" style={{ height: '10%' }}>
              <ColorButton onClick={() => handleAdd(product)}>Add To Cart</ColorButton>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default Products