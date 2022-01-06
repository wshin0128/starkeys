import * as React from "react"
import styled from "styled-components"

const StyledWrap = styled.div`
    max-width: 90em;
    margin: 0 auto;
    padding: 0 2em;
    display: flex;
    color: white;
    gap: 60px;
    align-items: flex-start;

    @media (min-width: 700px) {
        padding: 0 4em;
    }

    @media (min-width: 1100px) {
        padding: 0 6em;
    }
`

const StyledFooter = styled.div`
    background: #0b0619;
    padding: 40px 0;

    h1 {
        font-weight: 500;
        margin: 0 0 10px;
        user-select: none;
    }
    span {
        opacity: 0.6;
    }
`
const SiteMap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 4px 0;
    a {
        opacity: 0.6;
        color: white;
        text-decoration: none;
        line-height: 20px;
        font-size: 1em;
        font-weight: 500;

        &:hover {
            opacity: 0.4;
        }
    }
`
const StyledButton = styled.a`
    display: none;
    padding: 12px 18px;
    font-size: 1em;
    border-radius: 10px;
    text-decoration: none;
    color: white;
    font-weight: 500;
    border: 1px solid white;
    opacity: 0.6;

    &:hover {
        opacity: 0.4;
    }

    @media (min-width: 700px) {
        display: inline-block;
    }
`

const Footer = () => {
    return (
        <StyledFooter>
            <StyledWrap>
                <div>
                    <h1>StarKeys</h1>
                    <span>© StarKeys</span>
                </div>
                <SiteMap>
                    <a href="#why-nfts">Why NFTs?</a>
                    <a href="#last">Why StarKeys?</a>
                    <a href="https://536xix53qb2.typeform.com/to/STWYao7g">Contact Us</a>
                </SiteMap>
                <StyledButton href="https://calendly.com/starkeys-io" target="_blank">Schedule a free consultation</StyledButton>
            </StyledWrap>
        </StyledFooter>
    )
}

export default Footer