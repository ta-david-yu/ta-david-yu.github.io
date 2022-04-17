import React, { Component } from "react"
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AboutMe from "./AboutMe";
import About from "../webpage/About";
import Template from "../template/Template";
import withWindowSize from '../withWindowSize';
import Constants from "./Constants";

class Main extends Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/">
                        <AboutMe />
                    </Route>
                    <Route path="/about-me">
                        <AboutMe />
                    </Route>
                    
                    <Route path="/art">
                        <Template />
                    </Route>
                    <Route path="/gameplay">
                        <Template />
                    </Route>

                    <Route path="*">
                        <AboutMe />
                    </Route>
                </Switch>
            </HashRouter>
        );
    }
}

export default withWindowSize(Main);