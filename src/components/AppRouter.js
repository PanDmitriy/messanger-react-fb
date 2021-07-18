import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { privateRoutes, publicRoutes } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from './utils/routeConstans';
import { useAuthState }from 'react-firebase-hooks/auth'
import { PropsContext } from '..';
import { Loader } from './Loader';

const AppRouter = () => {
  const {auth} = useContext(PropsContext);
  const [user, loading, error] = useAuthState(auth);

  if(loading) {
    return <Loader/>
  }

  return user
  ? (
    <Switch>
      {privateRoutes.map(({path, Component}) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={CHAT_ROUTE}/>
    </Switch>
    )
  : (
    <Switch>
      {publicRoutes.map(({path, Component}) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={LOGIN_ROUTE}/>
    </Switch>
    )

};

export default AppRouter;