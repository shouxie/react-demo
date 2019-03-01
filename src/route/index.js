import React from 'react'
import {HashRouter, Route, Switch, BrowserRouter} from 'react-router-dom'
import Index from '@/components/index'
import Detail from '@/components/detail'
import Login from '@/components/Login/index'
import Home from '@/components/Home'
const BasicRoute = () => {
    return <HashRouter>
        <Index>
            {/*<Switch>
                <Route exact path="/" component={Index}>
                </Route>
                <Route path="/login" component={Login}></Route>
                <Home>
                    <Route path="/detail" component={Detail}></Route>
                </Home>
            </Switch>*/}
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Home>
                    <Route path="/detail" component={Detail}></Route>
                </Home>
            </Switch>
            {/*<Home>
                <Route path="/detail" component={Detail}></Route>
            </Home>*/}
        </Index>
        
    </HashRouter>
}

export default BasicRoute;


