import React, { Component } from "react"
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import PageTab from "./PageTab";
import Constants from "./Constants";
import TableOfContents from "./TableOfContents";
import withWindowSize from '../withWindowSize';

import "../../css/Portfolio.css";
import "../../css/Gallery.css"

const GridOffset = (props) => { return <Grid item></Grid>; }

class ArtGallery extends Component {

    componentDidMount()
    {
        //window.open('https://www.google.com', '_blank');
        //window.location.replace('https://www.google.com')
    }

    constructor(props) {
        super(props);
        console.warn(`WARNING! Obsolete class constructed. ${ArtGallery.name} has been deprecated. We are using tumblr directly.`);
    }

    render() {
        return (
            <div>
                <div className="gallery-top-content">
                    <Grid 
                    container 
                    spacing={8}
                    direction="column"
                    justify="center"
                    alignItems="center">
                        <GridOffset/><GridOffset/><GridOffset/><GridOffset/>
                        <Grid item xs={12}>
                            <img alt="ta-david-yu" src="./img/ta-david-yu-mascot-x64.png" className="logo"/>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="header-text">ta david yu</div>
                        </Grid>
                        <Grid item>
                            <a href="https://twitter.com/TaDavidYu"><img alt="twitter" src="./img/twitter-x26.png" className="icon-26"/></a>
                            <a href="https://github.com/ta-david-yu"><img alt="github" src="./img/github-x26.png" className="icon-26"/></a>
                            <a href="https://www.linkedin.com/in/ta-david-yu/"><img alt="linkedin" src="./img/linkedin-x26.png" className="icon-26"/></a>
                            <a href="mailto: ta.yu.gamedev@gmail.com"><img alt="email" src="./img/gmail-x26.png" className="icon-26"/></a>
                        </Grid>
                    </Grid>
                </div>
                <div className="container">
                    <main>
                        <TransitionGroup>
                            <CSSTransition
                            in={true}
                            appear={true}
                            timeout={{
                                appear: 600,
                                enter: 300,
                                exit: 0
                            }}
                            classNames="page-tab-transition">
                                <div className="center-align">
                                    <Link to={"/"}>
                                        <img alt={"home-tab"} src={"./img/game-button-active.png"} className={"home-button"} />
                                    </Link>
                                </div>
                            </CSSTransition>
                        </TransitionGroup>

                        <div className="posts-container">
                            <img src={"./img/art/Wolf-Fullmoon-Lowerx4.png"} /><br/>
                            <img src={"./img/art/Wolf-Fullmoon-Lowerx4.png"} />
                            <div>UNDER CONSTRUCTION</div>
                            <hr/>
                        </div>
                        <div className="posts-container">
                            <img src={"./img/art/TreeMoonCat.png"} />
                            <div>UNDER CONSTRUCTION</div>
                            <img src={"./img/art/stranded-social-media.png"} /><br/>
                            <div>UNDER CONSTRUCTION</div>
                            <img src={"./img/art/MissYouDayNNight-social-media-x2.png"} /><br/>
                            <div>UNDER CONSTRUCTION</div>
                            <img src={"./img/art/ootm-social-media-x2.png"} /><br/>
                            <div>UNDER CONSTRUCTION</div>
                            <hr/>
                        </div>
                    </main>
                    <TableOfContents />
                </div>
                <footer>
                    website designed & created by Ta David Yu ~ <span/>
                    <a className="footer-link" href="https://github.com/ta-david-yu/ta-david-yu.github.io">view source</a> (it's quite messy, I've warned you :P)
                    
                    <br/>
                    
                    fonts made by <span/>
                    <a className="footer-link" href="https://managore.itch.io/">Daniel Linssen</a>, social icons made by <span/>
                    <a className="footer-link" href="https://kronbits.itch.io/matriax-free-assets">Davit Masia</a>
                </footer>
            </div>
        );
    }
}

export default withWindowSize(ArtGallery);