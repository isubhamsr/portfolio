import React from 'react'
import ContactPage from './ContactPage'
import Hero from './Hero'
import PortfolioProject from './PortfolioProject'

export default function Home() {
    return (
        <React.Fragment>
            <Hero />
            <hr />
            <PortfolioProject />
            <hr />
            <ContactPage />
        </React.Fragment>
    )
}
