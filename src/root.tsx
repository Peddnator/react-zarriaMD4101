import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  CssBaseline,
  MuiThemeProvider
} from '@material-ui/core';
import AuthProvider from 'contexts/auth';
import App from 'app';
//MuiTheme
import rootTheme from 'rootStyle';

const Root: React.FC = () => {

  return (
    <MuiThemeProvider theme={rootTheme}>
      <AuthProvider>
        <CssBaseline />
        <Router>
          <App />
        </Router>
      </AuthProvider>

    </MuiThemeProvider>

  )

}

export default Root;
