import React, {useState} from 'react'
import Video from '../HeroSection/video.mp4';
import { Button } from "../ButtonElement";
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElement';

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay muted loop src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Learn Cyber Security Today</HeroH1>
                <HeroP>
                    Sign Up for a new account today and recieve Free E-book towards your next course.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' 
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'
                            smooth={true}
                    duration={1500}
                    spy={true}
                    exact='true'
                    offset={-80}
                        >        
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}

                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
