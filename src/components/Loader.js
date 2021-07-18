import React from 'react';
import { 
  Container, 
  Grid, 
  CircularProgress,
} from '@material-ui/core';

export const Loader = () => {
  return (
    <Container>
      <Grid container alignItems={'center'} justify={'center'} style={{height: window.innerHeight - 100}}>
        <CircularProgress />
      </Grid>
    </Container>
  );
};