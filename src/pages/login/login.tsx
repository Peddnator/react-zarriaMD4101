import React, { useContext } from 'react';
import { Button, Grid } from '@material-ui/core';
import { AuthContext } from 'contexts/auth'
import { ReactComponent as Logo } from 'images/logo-react-zzaria.svg';

const Login: React.FC = () => {

  const { login, logout, userInfo } = useContext(AuthContext);

  return (
    <React.Fragment>
      <Grid container
        spacing={2}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Logo />
        </Grid>
        <Grid item container justify="center" xs={12} >
          {userInfo!.isUserLoggedIn && (
            <>
              <pre>{userInfo!.user.email}</pre>
              <Button variant="contained" className="CustomButton"
                fullWidth onClick={logout}>Logout</Button>
            </>
          )}
          {!userInfo!.isUserLoggedIn && (
            <Button variant="contained" className="CustomButton"
              fullWidth onClick={login}>Log in with GitHub</Button>
          )}
        </Grid>
      </Grid>
    </React.Fragment >
  )
}

export default Login
