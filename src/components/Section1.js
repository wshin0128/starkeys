import * as React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFireAlt,
    faUsers,
    faDollarSign
  } from '@fortawesome/free-solid-svg-icons'

const StyledSection = styled.section`
    padding: 100px 0;
    color: white;

    h2 {
        font-size: 3em;
        font-weight: 500;
        margin: 0 0 60px;
    }
    
`
const StyledWrap = styled.div`
    max-width: 90em;
    margin: 0 auto;
    padding: 0 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`
const CardContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 40px;
`
const Card = styled.div`
    flex: 1;
    background: linear-gradient(135deg,#4a0c9b61,#110a3054);
    border-radius: 10px;
    padding: 60px;

    svg {
        color: #9350ff
    }

    h3 {
        font-size: 2.2em;
        line-height: 1.4em;
        margin: 60px 0 20px;
    }
    p {
        font-size: 1.4em;
        line-height: 1.6em;
        opacity: 0.6;
    }
`


const Section1 = () => {
    return (
        <StyledSection style={{paddingTop: "50px"}} id="why-nfts">
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
                        <p>Strengthen the relationship between you and your followers by allowing them to own a piece of your work.</p>
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