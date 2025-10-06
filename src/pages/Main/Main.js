import React from 'react'
import {Helmet} from 'react-helmet'

import {
    About,
    Achievement,
    Contacts,
    Education,
    Experience,
    Footer,
    Landing,
    Navbar,
    Projects,
    Services
} from '../../components'
import {headerData} from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name}</title>
            </Helmet>

            <Navbar/>
            <Landing/>
            <About/>
            <Education/>
            {/*<Skills />*/}
            <Experience/>
            <Projects/>
            <Achievement/>
            <Services/>
            {/*<Testimonials/>*/}
            {/*<Blog/>*/}
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default Main
