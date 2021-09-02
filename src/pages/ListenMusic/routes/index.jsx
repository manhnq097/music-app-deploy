import { Route, Switch } from "react-router-dom";
import DetailAlbum from '../pages/DetailAlbum';
import Home from '../pages/Home';

const Routes = () => {
    return (
        <Switch>
            {/* Home */}
            <Route exact path="/listen-music" component={Home} />

            {/* Website */}
            <Route path="/listen-music/detail-album/:album/:index" component={DetailAlbum} />
        </Switch>
    )
}

export default Routes