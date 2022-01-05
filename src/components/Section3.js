import * as React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
    padding: 20px 0 100px;
    color: white;
`
const StyledWrap = styled.div`
    max-width: 90em;
    margin: 0 auto;
    padding: 0 6em;
    display: flex;
    flex-direction: column;
    height: 100%;
`
const Steps = styled.div`
    padding: 0 100px;
`
const Step = styled.div`
    padding: 40px 0;
    border-top: 1px solid white;
    display: flex;
`
const StepNumber = styled.div`
    display: inline-block;
    border-radius: 50%;
    border: 2px solid #4095ff;
    color: #4095ff;
    min-width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-weight: 900;
    font-size: 1.2em;
    margin-right: 40px;
`
const StepContent = styled.div`
    h4 {
        font-size: 2em;
        margin: 0;
        line-height: 44px;
    }
    p {
        font-size: 1.4em;
        opacity: 0.9;
        font-weight: 300;
        margin: 20px 0 0;
        line-height: 30px;
    }
`

const Section3 = () => {
    return (
        <StyledSection>
            <StyledWrap>
                <Steps>
                    <Step>
                        <StepNumber>1</StepNumber>
                        <StepContent>
                            <h4>Complete NFT Creation</h4>
                            <p>Our team works with you to design and build a project from scratch that fits your personal critera and brand.</p>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepNumber>2</StepNumber>
                        <StepContent>
                            <h4>Post-drop Advisory</h4>
                            <p>You recieve monthly reports and recommendations to take your project to the moon and maximize your passive income.</p>
                        </StepContent>
                    </Step>
                    <Step style={{borderBottom: "1px solid white"}}>
                        <StepNumber>3</StepNumber>
                        <StepContent>
                            <h4>Community Management</h4>
                            <p>We provide in-house, 24/7 management of your community of super fans.</p>
                        </StepContent>
                    </Step>
                </Steps>
            </StyledWrap>
        </StyledSection>
    )
}

export default Section3