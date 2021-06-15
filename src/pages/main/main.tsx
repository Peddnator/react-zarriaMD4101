import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core';
import Header from './header';
import { Route, Switch } from 'react-router-dom';

const ChoosePizzaSize = lazy(() => import('pages/choose-pizza-size'));
const ChoosePizzaFlavours = lazy(() => import('pages/choose-pizza-flavours'));

const Main: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Spacer />
      <Content>
        <Suspense fallback='Loading...'>
          <Switch>
            <Route path='/' exact component={ChoosePizzaSize} />
            <Route path='/pizza-flavours' component={ChoosePizzaFlavours} />
          </Switch>

        </Suspense>
      </Content>
    </React.Fragment>
  );
}

const Content = styled.main`
    padding: 80px 20px 20px;
    `;


const style = (theme: any) => {
  return {
    main: theme.mixins.toolbar
  }
};
const SpacerWrapper = ({ classes }: any) => (
  <div className={classes.main} />
)
const Spacer = withStyles(style)(SpacerWrapper);


export default Main;
