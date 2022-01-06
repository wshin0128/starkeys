import * as React from "react"
import styled from "styled-components"

const NavbarWrap = styled.div`
    max-width: 90em;
    margin: 0 auto;
    padding: 0 2em;
    display: flex;
    align-items: center;

    @media (min-width: 700px) {
        padding: 0 4em;
    }

    @media (min-width: 1100px) {
        padding: 0 6em;
    }
`

const StyledNavbar = styled.div`
    padding: 30px 0;
    color: white;
    position: sticky;
    top: 0;
    z-index: 1;
    background: rgba(0,0,0,0.8);

    @media (min-width: 700px) {
\        background: linear-gradient(135deg,black,#100b28);
    }

    h1 {
        user-select: none;
        display: inline-block;
        font-weight: 500;
        margin: 0;
    }
    a {
        font-size: 1.2em;
        display: none;
        margin-left: 40px;
        text-decoration: none;
        color: white;

        @media (min-width: 700px) {
            display: inline-block;
        }
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
                <a id="page-1" href="#why-nfts">Why NFTs?</a>
                <a href="#last">Why StarKeys?</a>
                <a href="https://536xix53qb2.typeform.com/to/STWYao7g">Contact Us</a>
            </NavbarWrap>
        </StyledNavbar>
    )
}

export default Navbar