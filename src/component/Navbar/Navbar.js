import React from 'react'
import Shape from '../../images/icons/shape.png'
import Search from '../../images/icons/search.png'
import Cart from '../../images/icons/cart.png'
import {Nav, NavbarContainer,NavLogo, NavImage, NavMenu,NavLinks,NavIcons, NavItem ,NavBadge, Divider} from './Navbar.element'


export default function Navbar() {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                       <NavImage/>
                    </NavLogo>
                    
                    <NavMenu>
                        <NavItem>
                            <NavLinks>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Fruits & Vegetable </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Shop</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>FAQ</NavLinks>
                        </NavItem>
                     

                        <Divider/>

                        <NavItem>
                            <NavIcons src={Cart} />
                            <NavBadge>0</NavBadge>
                        </NavItem>
                        <NavItem>
                            <NavIcons src={Shape} />
                            <NavBadge>0</NavBadge>
                        </NavItem>
                        <NavItem>
                            <NavIcons src={Search} />
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}
