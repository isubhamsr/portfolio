import React from 'react'
import ContactPage from './ContactPage'
import Hero from './Hero'
import PortfolioProject from './PortfolioProject'
import Roadmap from './Roadmap'

export default function Home() {
    return (
        <React.Fragment>
            <Hero />
            <hr />
            <PortfolioProject />
            <hr />
            <Roadmap />
            <hr />
            <ContactPage />
        </React.Fragment>
    )
}
