import { useAppSelector, useAppDispatch } from '../redux/hooks'
import type { RootState } from '../redux/store'
import { removeItems } from '../redux/features/cart/cartSlice'
import { AppBar, makeStyles, Typography, styled } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Paper, useTheme } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    navlinks0: {
        backgroundColor: '#FAF9F6',
    },
    navlinks1: {
        marginLeft: theme.spacing(2),
    },
    navlinks2: {
        marginTop: theme.spacing(1),
        backgroundColor: 'red'

    },
    paper: {
        // padding: theme.spacing.unit,
        textAlign: "center",
        color: theme.palette.text.secondary,
        whiteSpace: "nowrap",
        // marginBottom: theme.spacing.unit
    },
    customBorderRadius: {
        borderRadius: 15,
        margin: theme.spacing(1),
        width: theme.spacing(180),
        height: theme.spacing(15),
    },
    button: {
        margin: theme.spacing(1),
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const Cart = () => {
    const classes = useStyles();
    const theme = useTheme();
    const products: any = useAppSelector((state: RootState) => state.cart.value);
    console.log("products", products)
    const dispatch = useAppDispatch();
    const removeItem = (productId: any) => {
        dispatch(removeItems(productId));
    }
    return (
        // <div>
        //     <h3>Cart</h3>
        //     <div className='cartWrapper'>
        //         {
        //             products && products.map((product: any) => (
        //                 <div key={product.id} className="cartCard">
        //                     <img src={product.image} alt="not loaded " />
        //                     <h5>{product.title}</h5>
        //                     <h5>{product.price}</h5>
        //                     <button className='btn' onClick={()=>{removeItem(product.id)}}>remove</button>
        //                 </div>
        //             ))
        //         }
        //     </div>
        // </div>
        <Box className={classes.navlinks0}>
            <Box className={classes.navlinks1}>
                <Typography variant="h6">
                    Cart
                </Typography>
            </Box>
            {products && products.map((product: any) => (
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                >
                    <Paper className={classes.customBorderRadius} elevation={15}>
                        <Grid container
                            style={{}}
                            direction="row"
                            
                            alignItems="center"
                            spacing={4} >
                            <Grid className={classes.image} justifyContent="flex-start"  alignItems="baseline" style={{ width: '40%' ,marginTop: theme.spacing(2) }} item>
                                <img className={classes.img} alt="complex" src={product.images[0]} />
                            </Grid>
                            <Grid item style={{ width: '20%' }}>
                                <Typography variant="body1" style={{ fontSize: 13,  }} gutterBottom>
                                    {product.title}
                                </Typography>
                            </Grid>
                            <Grid  item style={{ width: '20%' }}>
                                <Typography variant="body1" gutterBottom>
                                    {product.price}
                                </Typography>
                            </Grid>
                            <Grid item style={{ width: '20%' }}>
                                <Button
                                    onClick={() => { removeItem(product.id) }}
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    startIcon={<DeleteIcon />}
                                >
                                    Delete
                                </Button>
                            </Grid>

                        </Grid>
                    </Paper>
                </Grid>
            ))}
        </Box>
    )
}

export default Cart
