import * as React from "react"
import styled from "styled-components"

const HeroSection = styled.section`
    height: calc(100vh - 194px);
`
const StyledWrap = styled.div`
    max-width: 90em;
    margin: 0 auto;
    padding: 0 1.5em;
    display: flex;
    align-items: center;
    height: 100%
`
const HeroContainer = styled.div`
    display: flex;
    color: white;
    gap: 100px;

    #hero-left {
        flex: 3;
    }
    h2 {
        font-size: 5em;
    }
`
const StyledButton = styled.a`
    display: inline-block;
    border: 1px solid white;
    padding: 20px 30px;
    font-size: 1.4em;
    border-radius: 10px;
    text-decoration: none;
    color: white;

    &:hover {
        opacity: 0.6;
    }
`
const ServicesContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 20px;
`
const Service = styled.div`
    background-color: rgba(256,256,256,0.2);
    padding: 20px;
    border-radius: 10px;

    .service-title {
        font-size: 1.6em;
    }
`

const Hero = () => {
    return (
        <HeroSection>
            <StyledWrap>
                <HeroContainer>
                    <div id="hero-left">
                        <h2>The <span style={{color: "#00a6f1"}}>#1 NFT Agency</span> for Influencers</h2>
                        <StyledButton href="https://www.google.com" target="_blank">Schedule a free consultation</StyledButton>
                    </div>

                    <ServicesContainer>
                        <Service>
                            <span className="service-title">Design</span>
                        </Service>
                        <Service>
                            <span className="service-title">Community Building</span>
                        </Service>
                        <Service>
                            <span className="service-title">Post-Drop Support</span>
                        </Service>
                    </ServicesContainer>
                </HeroContainer>
            </StyledWrap>
        </HeroSection>
    )
}

export default Hero