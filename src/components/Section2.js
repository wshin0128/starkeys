import * as React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
    padding: 180px 0 0px;
    color: white;

    .textParent {
        padding: 0 0 40px;

        > span {
            font-size: 1.8em;
            font-weight: 700;
            position: sticky;
            top: calc(100vh / 2 - 40px);

            @media (min-width: 1100px) {
                font-size: 3em;
            }
        }

        @media (min-width: 700px) {
            padding: 0 10px 40px;
        }

        @media (min-width: 1100px) {
            padding: 0 40px 40px;
        }
    }

    #last {
        position: relative;
        top: 0;

        background-color: #9350ff;
        background-image: linear-gradient(45deg,#4095ff,#9350ff);
        background-size: 100%;
        background-repeat: repeat;

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
    }
`
const StyledWrap = styled.div`
    max-width: 90em;
    margin: 0 auto;
    padding: 0 2em;
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 700px) {
        padding: 0 4em;
    }

    @media (min-width: 1100px) {
        padding: 0 6em;
    }
`

const Section2 = () => {
    return (
        <StyledSection>
            <StyledWrap>
                <div className="textParent" style={{height: "800px"}}>
                    <span style={{opacity: "0.6"}}>The biggest barrier to making NFTs is not knowing where to start.</span>
                </div>
                <div className="textParent" style={{height: "600px"}}>
                    <span>We take care of the entire process: designing, minting, and keeping track of your tokens—all in one centralized place.</span>
                </div>
                <div className="textParent" style={{height: "600px"}}>
                    <span>That means less outsourcing, lower costs, and a hassle-free experience for you.</span>
                </div>
                <div className="textParent">
                    <span id="last">Here's how it works:</span>
                </div>
            </StyledWrap>
        </StyledSection>
    )
}

export default Section2