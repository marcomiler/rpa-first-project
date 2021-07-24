import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DashboardRouters from "./DashboardRouters";
import LoginScreen from "../pages/LoginScreen";

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        exact
                        path="/login" 
                        component={LoginScreen} 
                    />
                    <Route 
                        path="/" 
                        component={DashboardRouters}
                    />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
