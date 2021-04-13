import React from 'react'

import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle,FooterLink } from "./FooterElements";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                                <FooterLink to="/signin">How It Works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">About Us</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/signin">Contact</FooterLink>
                                <FooterLink to="/signin">Support</FooterLink>
                                <FooterLink to="/signin">Destinations</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Sponsorship</FooterLink> 
                        </FooterLinkItems>    
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to="/signin">Submit Videos</FooterLink>
                                <FooterLink to="/signin">Ambassador</FooterLink>
                                <FooterLink to="/signin">Agency</FooterLink>
                                <FooterLink to="/signin">Influencer</FooterLink>
                                <FooterLink to="/signin">Hakathons</FooterLink>
                                <FooterLink to="/signin">Programming</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media </FooterLinkTitle>
                                <FooterLink to="/signin">Instagram</FooterLink>
                                <FooterLink to="/signin">Facebook</FooterLink>
                                <FooterLink to="/signin">Youtube</FooterLink>
                                <FooterLink to="/signin">Twitter</FooterLink>
                        </FooterLinkItems>    
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
