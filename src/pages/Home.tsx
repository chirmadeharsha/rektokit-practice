// import React from 'react'
// import {
//   AppBar,
//   Toolbar,
//   CssBaseline,
//   Typography,
//   makeStyles,
//   Box
// } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import App from '../App';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// function Home() {

//    const classes  = useStyles();
//   return (

//     <
//     <AppBar position='static'>
//       <Toolbar>
//         <Typography variant="h4">
//           Redux Store
//         </Typography>
//         <Box component="span" m={500}>
//           <Link to="/">
//             Home
//           </Link>
//         </Box>
//         <Box component="span" m={500}>
//           <Link to="/cart">
//             Cart
//           </Link>
//         </Box>
//         <Typography variant="h4">
//           CART ITEMS :0
//         </Typography>
//       </Toolbar>
//     </AppBar>
//   )
// }

// export default Home

import React from 'react'
import Products from '../components/Products'

function Home() {
  return (
    <div>
      <h2 className="heading"> Welcome to the Redux toolkit store</h2>
      <section>

        <h3>products</h3>
        <Products />
      </section>
    </div>
  )
}

export default Home

