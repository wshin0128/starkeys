import * as React from "react"
import styled from "styled-components"

const HeroSection = styled.section`
    height: 460px;

    @media (min-width: 1100px) {
        height: calc(100vh - 97px);
    }
`
const StyledWrap = styled.div`
    max-width: 90em;
    margin: 0 auto;
    padding: 0 2em;
    display: flex;
    align-items: center;
    height: 100%;

    @media (min-width: 700px) {
        padding: 0 4em;
    }

    @media (min-width: 1100px) {
        padding: 0 6em;
    }
`
const HeroContainer = styled.div`
    display: flex;
    color: white;
    gap: 40px;

    #hero-left {
        flex: 3;
        align-self: center;
        display: flex;
        align-content: start;
        flex-flow: wrap;
    }
    #hero-right {
        flex: 2;
        display: none;

        @media (min-width: 1100px) {
            display: block;
        }
    }
    h2 {
        font-size: 3em;
        margin: 0 0 0.4em;
        font-weight: 700;

        @media (min-width: 700px) {
            font-size: 4em;
        }

        @media (min-width: 1100px) {
            font-size: 5em;
            font-weight: 500;
        }

        span {
            color: #4095ff;

            @media (min-width: 700px) {
                background-color: #4095ff;
                background-image: linear-gradient(45deg,#4095ff,#9350ff);
                background-size: 100%;
                background-repeat: repeat;

                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent; 
                -moz-background-clip: text;
                -moz-text-fill-color: transparent;
            }
        }
    }
`
const StyledButton = styled.a`
    display: inline-block;
    padding: 12px 20px;
    font-size: 1.2em;
    border-radius: 10px;
    text-decoration: none;
    color: white;
    background: linear-gradient(45deg,#5105e7,#3278d1);
    font-weight: 500;

    &:hover {
        opacity: 0.6;
    }

    @media (min-width: 700px) {
        padding: 20px 30px;
        font-size: 1.4em;
    }
`
const NFTcard = styled.div`
    background-color: rgba(256, 256, 256, 0);
    width: 500px;
    height: 600px;
    border-radius: 10px;
    box-shadow: 0 0 40px 10px rgba(147, 80, 255, 0.3); 

    #nft-img {
        width: 500px;
        height: 600px;
        background-size: cover;
        background-position: center;
        background-image: url("https://i.redd.it/jfgm9yrvtxt71.jpg");
        // background-image: url("https://lh3.googleusercontent.com/QgfVXQ3STb2G8uuPV5AeDk3rvlQYtXXOJq2zvTlIFUmUMLfnNI7hxyTnuPz54jt0a7hoN2_U-okRJfofGkTvo3AiKCYZFoIJc6lyRCA=w600");
        border-radius: 10px;
        background-image: url("https://cdn.dribbble.com/users/35874/screenshots/15254023/media/7f730cde9eb3b9be76aac9bec62e2f4d.gif");
        // filter: brightness(0.8);
    }

    #nft-info {
        display: flex;
        height: 100px;
        padding: 0 40px;

        div {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;

            h5 {
                opacity: 0.5;
                font-size: 1em;
                margin: 0 0 4px;
                font-weight: 300;
            }
            p {
                margin: 0 0 4px;
                font-size: 1.8em;
                font-weight: 500;

                .timeLabel {
                    font-size: 0.7em;
                    opacity: 0.8;
                    margin-left: 4px;
                }
            }
        }
    }
`

const Hero = () => {
    return (
        <HeroSection>
            <StyledWrap>
                <HeroContainer>
                    <div id="hero-left">
                        <h2>The <span>#1 NFT Agency</span> for Influencers</h2>
                        <StyledButton href="https://calendly.com/starkeys-io" target="_blank">Schedule a free consultation</StyledButton>
                    </div>

                    <div id="hero-right">
                        <NFTcard>
                            <div id="nft-img"></div>
                            {/* <div id="nft-info">
                                <div id="current-bid">
                                    <h5>Current Bid</h5>
                                    <p>3.00 ETH</p>
                                </div>
                                <div id="countdown">
                                    <h5>Ends In</h5>
                                    <p>12<span className="timeLabel">H</span> 34<span className="timeLabel">M</span> 56<span className="timeLabel">S</span></p>
                                </div>
                            </div> */}
                        </NFTcard>
                    </div>
                </HeroContainer>
            </StyledWrap>
        </HeroSection>
    )
}

export default Hero