import * as React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from "@fortawesome/free-solid-svg-icons"

const StyledSection = styled.section`
    color: white;
    height: 700px;
    background: linear-gradient(135deg,#4a0c9b61,#110a3054);

    @media (min-width: 700px) {
        height: calc(100vh - 97px);
    }
`
const StyledWrap = styled.div`
    max-width: 90em;
    margin: 0 auto;
    padding: 0 2em;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    text-align: center;
    align-items: center;

    @media (min-width: 700px) {
        padding: 0 4em;
    }

    @media (min-width: 1100px) {
        padding: 0 6em;
    }

    svg {
        margin: 0 auto;
    }

    h2 {
        font-size: 2em;
        font-weight: 700;
        display: inline-block;
        max-width: 600px;
        margin: 40px 0 10px;

        @media (min-width: 700px) {
            font-size: 3.4em;
        }
    }
    p {
        margin: 10px 0 40px;
        font-size: 1.2em;

        @media (min-width: 700px) {
            font-size: 1.4em;
        }
    }
`
const StyledButton = styled.a`
    display: inline-block;
    padding: 12px 18px;
    font-size: 1em;
    border-radius: 10px;
    text-decoration: none;
    color: white;
    font-weight: 700;
    background: #9350ff;
    
    &:hover {
        opacity: 0.8;
    }
`


const Section4 = () => {
    return (
        <StyledSection>
            <StyledWrap>
                <FontAwesomeIcon icon={faRocket} size="4x" />
                <h2>Ready to launch your first NFT project?</h2>
                <p>Get started with a free consultation with our team.</p>
                <StyledButton href="https://calendly.com/starkeys-io" target="_blank">Schedule now</StyledButton>
            </StyledWrap>
        </StyledSection>
    )
}

export default Section4