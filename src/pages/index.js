import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Navbar/Footer'
import HeroSection from '../components/Navbar/HeroSection'
import InfoSection from '../components/Navbar/InfoSection'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../components/Navbar/InfoSection/Data'
import Services from '../components/Navbar/Services'
import Sidebar from '../components/Navbar/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)

    }

    
    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle} />
           <Navbar toggle={toggle} /> 
           <HeroSection />
           <InfoSection {...homeObjOne}/>
           <InfoSection {...homeObjTwo}/>
           <Services/>
           <InfoSection {...homeObjFour} />
           <InfoSection {...homeObjThree}/>
           <Footer />
           
        </>
    )
}

export default Home
