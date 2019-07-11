import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Links from './Links'

const Container = styled.div.attrs({
    className: 'container'
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark'
})`
    margin-bottom: 20px
`

class Navbar extends React.Component{
    render(){
        return(
            <Container>
                <Nav>
                    <Logo />
                    <Links />
                </Nav>
            </Container>
        )
    }
}

export default Navbar;