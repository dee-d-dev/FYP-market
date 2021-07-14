import styled from 'styled-components';
import {Container} from '../../GlobalStyles';
import {Link} from 'react-router-dom';
import navImage from '../../images/logo.png'

export const Nav = styled.nav`
    background: #EFF7FA;
    box-shadow: 0px 2px 16px rgba(100, 100, 100, 0.498039);
    border-top: 3px solid #08862D;
    height: 144px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
    position: sticky;
    top: 0;
    z-index: 999;

    @media screen and (max-width: 1144px){
        display: none;
    }
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 144px;
    ${Container}
`;

export const NavLogo = styled(Link)`
    /* justify-self: center; */
    cursor: pointer;
    text-decoration: none;
    display:flex;
    align-items:center;
    justify-content: center;
    height: 100%;
`;

export const NavImage = styled.div `
    display: flex;
    justify-content: center;
    margin-top: 3.3rem;
    width: 170px;
    height: 100%;
    background-image: url(${navImage});
    background-repeat: no-repeat;
    /* background-size:cover; */
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform : translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu= styled.ul`
    display:flex;
    align-items:center;
    list-style: none;
    text-align: center;
`;

export const NavItem = styled.li`
    height: 50px;
    position: relative;
    display: flex;
    align-items:center;
    justify-content: center;
`;

export const NavLinks = styled(Link) `
    color: #292828;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1.5rem;
    height: 100%;

    @media screen and (max-width: 960px){
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover{
            color: #4b59f7;
            transition: all 0.3s ease;
        }
    }
`;

export const NavItemBtn = styled.li `
    @media screen and (max-width: 960px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`

export const NavBtnLink = styled(Link) `
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
`
export const Divider = styled.div `
    height: 30%;
    width: 2px;
    background: #292828;
`

export const NavIcons = styled.img `
    position: relative;
    margin-left: 2.5rem;
`

export const NavBadge = styled.div `
    position: absolute;
    top:5px;
    right: -9px;
    height: 18px;
    width: 18px;
    display:flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 10px;
    font-weight: 600;
    font-family: 'poppins';
    border-radius: 50%;
    background: #FFB801;
`