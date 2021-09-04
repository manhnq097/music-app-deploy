import { Route, Switch } from "react-router-dom";

import ListenMusic from '../pages/ListenMusic';
import Todo from '../pages/Todo';
import Article from '../pages/Article';
import PrintProfile from '../pages/PrintProfile';
import AromaShop from '../pages/AromaShop';
import Product from '../pages/Product';
import Profile from '../pages/Profile';
import Setting from '../pages/Setting';
import TestPage from '../pages/TestPage';
import NotFound from '../pages/NotFound';


const Routes = () => {
    return (
        <Switch>
            {/* Home */}
            <Route exact path="/" >
                <Profile btnPrint={true} />
            </Route>
            <Route path="/print-profile" component={PrintProfile} />

            {/* Website */}
            <Route path="/aroma-shop" component={AromaShop} />

            {/* App */}
            <Route path="/listen-music" component={ListenMusic} />
            <Route path="/workflow-management" component={Todo} />

            {/* Manager */}
            <Route path="/article" component={Article} />
            <Route path="/product" component={Product} />

            {/* Setting */}
            <Route path="/setting" component={Setting} />
            <Route path="/test" component={TestPage} />


            {/* Not Found */}
            <Route path="/:notfound" component={NotFound} />
        </Switch>
    )
}

export default Routes
