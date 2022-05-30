import React from "react"
import { Route, Switch } from "react-router-dom"
import { GlobalSection } from '../components/GlobalSection/GlobalSection'
import { Login } from '../pages/Login'
import { SignUp } from '../pages/SignUp'




const RouteList = [

  {
    path: "/",
    exact: true,
    component: Login
  },
  {
    path: "/sign-up",
    exact: true,
    component: SignUp
  },

]

const Routes = () => {
  return (
    <GlobalSection>
      <Switch>
        {RouteList.map(r => (
          <Route
            path={r.path}
            exact={r.exact}
            component={r.component}
            key={r.path}
          />
        ))}
      </Switch>
    </GlobalSection>
  )
}

export default Routes
