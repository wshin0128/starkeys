import * as React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFireAlt,
    faUsers,
    faDollarSign
  } from '@fortawesome/free-solid-svg-icons'

const StyledSection = styled.section`
    padding: 20px 0;
    color: white;

    h2 {
        font-size: 3em;
        font-weight: 500;
        margin: 0 0 60px;
        display: none;

        @media (min-width: 1100px) {
            display: inline-block;
        }
    }

    @media (min-width: 1100px) {
        padding: 100px 0;
    }
    
`
const StyledWrap = styled.div`
    max-width: 90em;
    margin: 0 auto;
    padding: 0 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    @media (min-width: 700px) {
        padding: 0 4em;
    }

    @media (min-width: 1100px) {
        padding: 0 6em;
    }
`
const CardContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 0;
    flex-direction: column;

    @media (min-width: 1100px) {
        flex-direction: row;
        gap: 40px;
    }
`
const Card = styled.div`
    flex: 1;
    background: none;
    border-radius: 10px;
    padding: 20px;

    @media (min-width: 1100px) {
        background: linear-gradient(135deg,#4a0c9b61,#110a3054);
        padding: 60px 60px 50px;
    }

    svg {
        color: #9350ff;
    }

    h3 {
        font-size: 2em;
        line-height: 1.4em;
        margin: 30px 0 20px;

        @media (min-width: 1100px) {
            font-size: 2.2em;
            margin: 60px 0 20px;
        }
    }
    p {
        font-size: 1.2em;
        line-height: 1.6em;
        opacity: 0.6;

        @media (min-width: 700px) {
            font-size: 1.4em;
        }
    }
`


const Section1 = () => {
    return (
        <StyledSection id="why-nfts">
            <StyledWrap>
                <h2>Why NFTs?</h2>
                <CardContainer>
                    <Card>
                        <FontAwesomeIcon icon={faFireAlt} size="3x" />
                        <h3>Capture the Market Trend</h3>
                        <p>NFTs are here to stay. Take advantage of the opportunity and monetize your fanbase.</p>
                    </Card>
                    <Card>
                        <FontAwesomeIcon icon={faUsers} size="3x" />
                        <h3>Increase Fan Engagement</h3>
                        <p>Strengthen the relationship between you and your fans by allowing them to own a piece of your work.</p>
                    </Card>
                    <Card>
                        <FontAwesomeIcon icon={faDollarSign} size="3x" />
                        <h3>Unlock Passive Income</h3>
                        <p>Receive royalties everytime your NFTs are sold.</p>
                    </Card>
                </CardContainer>
            </StyledWrap>
        </StyledSection>
    )
}

export default Section1