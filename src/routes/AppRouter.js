
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardRouters from "./DashboardRouters";
import Login from '../pages/Login';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" component={DashboardRouters}/>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
