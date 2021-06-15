import { LinearProgress } from '@material-ui/core';
import { Suspense, lazy, useContext, useEffect, useState } from 'react';
import { Redirect, Route, Switch, useLocation, withRouter } from 'react-router-dom';
//Context
import { AuthContext } from 'contexts/auth';
//firebase
import firebase from 'services/firebase'
//Components Lazy Import
const MainPage = lazy(() => import('pages/main'));
const Login = lazy(() => import('pages/login'));

const App: React.FC = () => {

  const { userInfo, setUserInfo } = useContext(AuthContext);
  const [didCheckUser, setDidCheckUser] = useState(false);

  const isUserLoggedIn = (userInfo!.isUserLoggedIn);

  let location = useLocation();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      const effectSetUser = setUserInfo;
      console.log('dados do usuario: ', user)
      effectSetUser!({
        isUserLoggedIn: !!user,
        user: user
      });
      setDidCheckUser(true)
    })
  }, [setUserInfo])

  if (!didCheckUser) {
    return <LinearProgress />
  }

  if (isUserLoggedIn && location.pathname === '/login') {
    return <Redirect to='/' />
  }

  if (!isUserLoggedIn && location.pathname !== '/login') {
    return <Redirect to='/login' />
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path='/login' component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )

}

export default withRouter(App);
