import React, { useState } from 'react'

import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    BurgerIcon,
    NavMenu,
    NavItem,
    NavLinks,
} from './Header.elements'

import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

export default function Header() {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/'>Expenser.</NavLogo>
                        <BurgerIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </BurgerIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/' onClick={handleClick}>
                                    Home
                                </NavLinks>
                            </NavItem>
                            {/* <NavItem>
                                <NavLinks to='/about' onClick={handleClick}>
                                    About
                                </NavLinks>
                            </NavItem> */}
                            <NavItem>
                                <NavLinks to='/login' onClick={handleClick}>
                                    Login
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}
