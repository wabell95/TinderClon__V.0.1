import React from "react"
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from "@mui/material";
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Header(botonRetroceder) {

  const historial = useHistory();

  return (
    <div className="header">


              {botonRetroceder ? (
                <IconButton onClick={() => historial.replace(botonRetroceder)} >
                    <ArrowBackIosIcon fontSize="large" className="header__botonRetroceder" />
                </IconButton>
                ) : (

                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large"/>
                </IconButton>
                )}


        <Link to="/">
          <img src="https://i.pinimg.com/564x/b8/d1/d7/b8d1d79c27b5fad14dc283e4314ff077.jpg" className="header__logo" alt="logo"/>
        </Link>

        

        <Link to="chats">
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large"/>
                </IconButton>
        </Link>

        

        

    </div>
  )
}
export default Header