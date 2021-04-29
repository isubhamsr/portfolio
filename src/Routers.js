import React from 'react'
import { Switch, Route } from "react-router-dom";
import About from './modules/core/About';
import Home from './modules/core/Home';
import Blog from './modules/blog/BlogIndex'
import Projects from './modules/projects/ProjectIndex'

export default function Routers() {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/about" exact>
                <About />
            </Route>
            <Route path="/pojects" exact>
                <Projects />
            </Route>
            <Route path="/blog" exact>
                <Blog />
            </Route>
        </Switch>
    )
}
