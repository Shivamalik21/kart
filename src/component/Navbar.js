import React from 'react'
import Badge from '@mui/material/Badge';

import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = ({quantity}) => {
  return (
    <div id="nav" style={{height:"5vw",borderBottom:"1px solid grey", backgroundColor:"blue"}}>
       <IconButton aria-label="cart">
  <Badge badgeContent={quantity} color="secondary"style={{ fontSize:"50px"}}>
    <ShoppingCartIcon style={{color:"white", fontSize:"40px"}} />
  </Badge>
</IconButton>
    </div>
  )
}

export default Navbar