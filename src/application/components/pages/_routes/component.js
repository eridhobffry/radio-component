import React from 'react'
import { Route, Switch, withRouter } from 'react-router'
import { ROUTES } from 'application/constants'
import { MainPage } from '..'

const RoutesComponent = () => {
    return <Switch>
        <Route exact path={ROUTES.BASE} component={MainPage} />
    </Switch>
}

export default withRouter(RoutesComponent)
