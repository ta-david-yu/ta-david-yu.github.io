import React, { Component } from "react"
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import { Fragment } from "react";

import ScrollToTop from "./ScrollToTop";
import AboutMe from "./AboutMe";
import ArtGallery from "./ArtGallery";
import Template from "../template/Template";
import withWindowSize from '../withWindowSize';
import Constants from "./Constants";
import TableOfContents from "./TableOfContents";

class Main extends Component {

    render() {
        return (
            <HashRouter>
                <Fragment>
                    <ScrollToTop />
                    <Switch>
                        <Route exact path="/">
                            <AboutMe />
                        </Route>
                        <Route path="/about-me">
                            <AboutMe />
                        </Route>
                        
                        <Route path="/art">
                            <ArtGallery />
                        </Route>
                        <Route path="/gameplay">
                            <Template />
                        </Route>

                        <Route path="*">
                            <AboutMe />
                        </Route>
                    </Switch>
                </Fragment>
            </HashRouter>
        );
    }
}

export default withWindowSize(Main);