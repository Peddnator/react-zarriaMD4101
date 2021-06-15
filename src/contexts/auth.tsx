import { createContext, useCallback, useState } from 'react';
import t from 'prop-types';
import firebase from 'services/firebase';


export const AuthContext = createContext<authProps>({});

//types
type userInfoType = {
  isUserLoggedIn: boolean
  user: any
}
type authProps = {
  userInfo?: userInfoType;
  setUserInfo?: (userInfo: userInfoType | ((userInfo: userInfoType) => userInfoType)) => void
  login?: () => void
  logout?: () => void
}

function Auth({ children }: any) {

  const [userInfo, setUserInfo] = useState<userInfoType>({
    isUserLoggedIn: false,
    user: null
  });


  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }, [])

  const logout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      console.log('deslogou');
      setUserInfo({
        isUserLoggedIn: false,
        user: null
      })
    })
  }, [])

  return (
    <AuthContext.Provider value={{ login, logout, userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider >
  )
}

Auth.propTypes = {
  children: t.node.isRequired
}

export default Auth;
