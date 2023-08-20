import { Link } from 'react-router-dom'
import type { RootState } from '../redux/store'
import { useAppSelector } from '../redux/hooks'
import Box from '@material-ui/core/Box';
import { AppBar, makeStyles, Typography, styled } from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';

const StyleToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const useStyles = makeStyles((theme) => ({
    navlinks1: {
        marginLeft: theme.spacing(10),
        display: "flex",
    },
    link: {
        textDecoration: "none",
        color: "black",
        fontSize: "20px",
        marginRight: theme.spacing(5),
        "&:hover": {
            color: "white",
            borderBottom: "1px solid white",
        },
    },
    appBar: {
       backgroundColor:'grey'
    },
    typo1: {
        color:'black'
     },
     typo2: {
        color:'black'
     },
}));


const NavBar = () => {
    var item: any = useAppSelector((state: RootState) => state.cart.value);
    console.log("item>> get", item)
    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.appBar}>
            <StyleToolBar>
                <Typography variant='h6' className={classes.typo1}>
                    Shopping Cart
                </Typography>
                <Box className={classes.navlinks1}>
                    <Typography variant='h6'>
                        <Link className={classes.link} to="/">
                            Home
                        </Link>
                    </Typography>
                    <Typography variant='h6'>
                        <Link className={classes.link} to="/cart">
                            Cart
                        </Link>
                    </Typography>

                    <Typography variant='h6' className={classes.typo2}>
                        Cart items : {item.length}
                    </Typography>
                </Box>
            </StyleToolBar>
        </AppBar>
    )
}


export default NavBar
