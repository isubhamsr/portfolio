import React from 'react'
import { Switch, Route } from "react-router-dom";
import About from './modules/core/About';
import Home from './modules/core/Home';
import Blog from './modules/blog/BlogIndex'
import Projects from './modules/projects/ProjectIndex'
import ContactPage from './modules/core/ContactPage';
import BlogDetails from './modules/blog/Components/BlogDetails';
import SmsSpamClassification from './modules/projects/nlpproject/SmsSpamClassification';
import StockPricePrediction from './modules/projects/nlpproject/StockPricePrediction';
import FakeNewsClassification from './modules/projects/nlpproject/FakeNewsClassification';

export default function Routers() {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/about" exact>
                <About />
            </Route>
            <Route path="/contact" exact>
                <ContactPage />
            </Route>
            <Route path="/pojects" exact>
                <Projects />
            </Route>

            {/* <Route path="/blog" exact>
                <Blog />
            </Route>
            <Route path="/blogdetails" exact>
                <BlogDetails />
            </Route> */}


            <Route path="/project/sms-span-classification" exact>
                <SmsSpamClassification />
            </Route>
            <Route path="/project/stock-price-prediction" exact>
                <StockPricePrediction />
            </Route>
            <Route path="/project/fake-news-prediction" exact>
                <FakeNewsClassification />
            </Route>
        </Switch>
    )
}
