import React from 'react'
import Intro from '../components/Intro'
import NavBar from '../components/NavBar'
import Image from '../components/Image'

import '../App.css';

function AboutUs() {
    return(
        <div>
            <NavBar/>
            <a style={{ marginTop: '100px' }} />
            <h1 className="header" class="container text-center py-3 display-4">Never forget your parking tickets</h1>
            <h2 className="header" class="container text-center display-6">Ever Again</h2>
            <Image/>
            <Intro/>
        </div>
    )
}

export default AboutUs;