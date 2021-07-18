import React, { useContext }  from 'react';
import { Button, Container, Paper, Box } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { PropsContext } from '..';
import firebase from 'firebase';

const Login = () => {
  const {auth} = useContext(PropsContext)

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const {user} = await auth.signInWithPopup(provider)
    console.log(user);
  }

  return (
    <Container>
      <Grid container alignItems={'center'} justify={'center'} style={{height: window.innerHeight - 100}}>
        <Paper elevation={10}>
          <Box p={5}>
            <Grid container style={{marginBottom: '2rem'}} justify='center'>
              <Avatar style={{backgroundColor: '#f44336'}}>
                <LockOutlinedIcon/>
              </Avatar>
            </Grid>
            <Button 
              variant='outlined' 
              color='primary' 
              startIcon={<AccountCircleIcon/>}
              onClick={login}
            >
              Sign in with Google
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Login;