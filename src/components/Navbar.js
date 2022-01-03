import * as React from "react"
import styled from "styled-components"

const NavbarWrap = styled.div`
    max-width: 90em;
    margin: 0 auto;
    padding: 0 1.5em;
    display: flex;
    align-items: center;
`

const StyledNavbar = styled.div`
    padding: 30px 0;
    color: white;
    position: sticky;
    top: 0;

    h1 {
        display: inline-block;
        font-weight: 500;
        margin: 0;
    }
    a {
        font-size: 1.2em;
        display: inline-block;
        margin-left: 40px;
    }
    #page-1 {
        margin-left: auto;
    }
`

const Navbar = () => {
    return (
        <StyledNavbar>
            <NavbarWrap>
                <h1>StarKeys</h1>
                <a id="page-1">Why NFTs?</a>
                <a>Why StaKeys?</a>
            </NavbarWrap>
        </StyledNavbar>
    )
}

export default Navbar