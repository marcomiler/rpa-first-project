import { Redirect, Route, Switch } from 'react-router-dom';
import Banner from '../components/Banner';
import NavBar from '../components/NavBar';
import Entertainment from '../components/news/Entertainment';
import General from '../components/news/General';
import Health from '../components/news/Health';
import Science from '../components/news/Science';
import SearchNews from '../components/news/SearchNews';
import Sports from '../components/news/Sports';
import Technology from '../components/news/Technology';
import TopHeadLines from '../components/news/Top]HeadLines';

const DashboardRouters = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <div>
                <Switch>
                    <Route exact path="/" component={TopHeadLines}/>
                    <Route exact path="/entertainment" component={Entertainment}/>
                    <Route exact path="/general" component={General}/>
                    <Route exact path="/health" component={Health}/>
                    <Route exact path="/science" component={Science}/>
                    <Route exact path="/sports" component={Sports}/>
                    <Route exact path="/technology" component={Technology}/>
                    <Route exact path="/search" component={SearchNews}/>

                     <Redirect to="/" />
                </Switch>
            </div>

        </>
    )
}

export default DashboardRouters;
