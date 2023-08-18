import React from 'react'
import { Link } from 'react-router-dom'
import type { RootState } from '../redux/store'
import {useAppSelector} from '../redux/hooks'
const NavBar = () => {
    var item : any   = useAppSelector((state: RootState) => state.cart.value);
    console.log("item>> get",item)

  return (
    <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span className="logo">REDUX STORE</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                {/* <span className="cartCount">Cart items{item}</span> */}
            </div>
        </div>
  )
}

export default NavBar
