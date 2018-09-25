import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

const renderRoutes = (routes, extraProps = {}, switchProps = {}) => routes
	? (<Switch {...switchProps}>
	    {routes.map((route, i) => (
	        <Route
	            key={route.key || i}
	            path={route.path}
	            exact={route.exact}
	            render={() => {
		            return <route.component {...props} {...extraProps} route={route} />
	            }}
	            // render={(props) => {
	            //     if (!route.requiresAuth) {
		         //        return <Redirect to='/auth' />
	            //     }
		         //    return <route.component {...props} {...extraProps} route={route} />
	            //
	            // }}
	        />
	    ))}
	  </Switch>
	) : null;

export default renderRoutes
