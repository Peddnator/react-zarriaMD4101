import React, { useContext, useState } from 'react';
import {
  AppBar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Toolbar as MaterialToolbar
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import styled from 'styled-components';
import { ReactComponent as MainLogo } from 'images/logo-react-zzaria.svg';

import { AuthContext } from 'contexts/auth';

const Header = () => {

  const { logout, userInfo } = useContext(AuthContext);
  const [anchorElement, setAnchorElement] = useState(null);
  const handleOpenMenu = (event: any) => {
    setAnchorElement(event.target)
  }
  const handleClose = () => {
    setAnchorElement(null);
  }

  return (
    <>
      <AppBar>
        <Toolbar>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Typography color="inherit">Hello!!! {userInfo!.user.email}</Typography>
          <IconButton color="inherit" onClick={handleOpenMenu}>
            <AccountCircle />
          </IconButton>
          <Menu open={!!anchorElement} onClose={handleClose} anchorEl={anchorElement}>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  )
}

const LogoContainer = styled.div`flex-grow: 1`;

const Logo = styled(MainLogo)
  `
    width: 400px;
    height: 50px;
    & path {
      fill: #fff;
    }
    & line {
      stroke: #fff;
    }
  `;
const Toolbar = styled(MaterialToolbar)
  `
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  `;

export default Header;
