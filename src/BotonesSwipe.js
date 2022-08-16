import React from "react"
import './BotonesSwipe.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CancelIcon from '@mui/icons-material/Cancel';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@material-ui/core';

function BotonesSwipe() {
  return (
    <div className="botonesSwipe">

        <IconButton className="botonesSwipe__replay">
            <ReplayIcon font="large"/>
        </IconButton>

        <IconButton className="botonesSwipe__close">
            <CancelIcon font="large"/>
        </IconButton>

        <IconButton className="botonesSwipe__star">
            <StarOutlineIcon font="large"/>
        </IconButton>

        <IconButton className="botonesSwipe__fav">
            <FavoriteIcon font="large"/>
        </IconButton>

        <IconButton className="botonesSwipe__flash">
            <FlashOnIcon font="large"/>
        </IconButton>



    </div>
  )
}
export default BotonesSwipe