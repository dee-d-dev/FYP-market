import styled from 'styled-components'
import {ContainerFluid, Container} from '../../GlobalStyles'

export const DivPro = styled.div `
margin-top: 10rem;
    height: 70px;
    background: #FFFFFF;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        color: #08862D;
        font-weight: 400;
        font-size: 18px;
        text-transform: uppercase
    }
`

export const ButtonPro = styled.button `
    background: #08862D;
    border: none;
    padding: 10px 50px;
    position: absolute;
    right: 5%;
    box-shadow: 0px 3px 6px rgba(100, 100, 100, 0.498039);
    border-radius: 5px;

    p{
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 400;
        text-transform: uppercase;
    }
`
export const DivMoreContainer = styled(Container)`
    margin-top: 1rem;
    background: #FFFFFF;
    padding: 20px 20px;
    margin-bottom: 2rem;
`
export const DivMore = styled.div `
    /* display: flex; */
`
export const PMore = styled.div `
    text-transform: capitalize;
    font-weight: 600;
    font-size: 18px;
    color: #2A2A2A;
    margin-bottom: 20px;
`
export const RowMore = styled.div `
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.2rem;
`
export const DivMoreItems = styled.div `
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(100, 100, 100, 0.498039);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items:center;
    /* justify-content: center; */
    width: 250px;
    height: 321px;
    margin-right:15px;
`
export const ImageMoreCon = styled.div `
    position: relative;
    width: 98%;
    height: 220px;
    background: #FFFFFF;
    display:flex;
    align-items: center;
    justify-content: center;
`
export const ImageMore = styled.img `
    width: auto;
    display: block;
`
export const DescMore = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const DescTitle = styled.p `
    color: #2A2A2A;
    font-size: 18px;
    line-height: 36px;
    text-transform: capitalize;
    font-weight: 400 !important;
`
export const DescPrice = styled.p  `
    color: #2a2a2a !important;
    font-size: 15px;
    line-height: 24px;
    font-weight: 400 !important;
`
export const AbRight = styled.div `
    width: 50px;
    height: 50px;
    background: #08862D;
    border-radius: 50%;
    position: absolute;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const AbLeft = styled.div `
    width: 50px;
    height: 50px;
    background: #08862D;
    border-radius: 50%;
    position: absolute;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImageR = styled.img `
    width: auto;
    display: block;
`