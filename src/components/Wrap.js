import * as React from "react"
import styled from "styled-components"

const StyledWrap = styled.div`
    max-width: 90em;
    margin: 0 auto;
    padding: 0 1.5em;
`

const Wrap = (props) => {
    return (
        <StyledWrap>
            {props.children}
        </StyledWrap>
    )
}

export default Wrap