import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom';
import './../../css/_loader.less';
const Home = lazy(() => import('./rightbar'));
const AboutUs = lazy(() => import('./../About/index'));
const Portfolio = lazy(() => import('./../Portfolio/index'));
const ContactUs = lazy(() => import('./../Contact/index'));
const Skills = lazy(() => import('./../Tech/index'));
const Blog = lazy(() => import('./../Blog/index'));

const Main = () => (
    <Suspense fallback={<div className="loader__wrap">Loading...</div>}>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/aboutus' component={AboutUs} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/contactus' component={ContactUs} />
            <Route path='/skills' component={Skills} />
            <Route path='/blog' component={Blog} />
        </Switch>
    </Suspense>
)

export default Main
