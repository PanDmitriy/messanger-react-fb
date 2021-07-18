import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Grid, Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
// import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { LOGIN_ROUTE } from './utils/routeConstans';
import { useAuthState }from 'react-firebase-hooks/auth'
import { PropsContext } from '..';

const Navbar = () => {
  const {auth} = useContext(PropsContext);
  const [user, loading, error] = useAuthState(auth);

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justify='flex-end' alignItems='center' >
        {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
          {loading 
            ? null
            : user ? (
                <div>
                  <IconButton
                    color="inherit"
                  >
                    { 
                      user.photoURL 
                        ? <Avatar src={user.photoURL} />
                        : <AccountCircle />
                    } 
                  </IconButton>
                  <Button 
                    color="inherit" 
                    variant='outlined'
                    onClick={()=> auth.signOut()}
                  >
                    Logout
                  </Button>
                </div>
              )
              : (
                  <Button color='inherit' variant='outlined'>
                    <NavLink style={{textDecoration: 'none', color: '#fff'}} to={LOGIN_ROUTE}>Login </NavLink> 
                  </Button>
              )
          }
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;