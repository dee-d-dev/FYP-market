import styled from 'styled-components'
import {Container} from '../../GlobalStyles'

export const ThankContainer = styled(Container) `
    display: flex;
    width: 80%;
    margin-top: 2rem;
    justify-content: space-between;
${Container}
`
export const CardContainer = styled.div `
    width: 100%;
`
export const Card = styled.div `    
    background-color:  #FFFFFF;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    position: relative;
    margin-bottom: 2.5rem;    
`
export const CardBody = styled.div `
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: ${({activePadding})=>(activePadding ? '1.2rem 1.8rem 4.5rem 1.8rem' : "1.5rem 1.8rem .9rem 1rem")};
`
export const CardDiv = styled.div `
    padding-bottom: 2rem;
`

export const CardImg = styled.img `
    display:block;
    width: 150px;
    margin-right: 3.5rem;
`

export const CardWrapper = styled.div `
 
`
export const CardRow = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
`
export const H1 = styled.h1 `
    font-weight: 700;
    color: #000000;
    font-size: 40px;
`
export const Order = styled.div `
    background: #FFFFFF;
    box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.498039);
    border-radius: 8px;
    display: flex;
    justify-content: center;
`
export const H3 = styled.h3 `
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 40px;
    color: #2A2A2A;

    span{
        color: #81AE18;
        font-weight: normal;
    }
`

export const CardH3 = styled.div `
    color: #686868;
    line-height: 36px;
    font-weight: 500;
    font-size: 22px;
`

export const CardP = styled.p `
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 21px;
    color: #686868;
`

/* ============== Go to Orders Styling ================ */
export const Confirm = styled.button `
    height: 50px;
    width: 92%;
    border: none;
    background: #08862D;
    box-shadow: 0px 4px 9px rgba(100, 100, 100, 0.498039);
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 18px;
    color: #FFFFFF;
    line-height: 36px;
    margin-top: 2.3rem;
`
export const ConfirmContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TrackContainer = styled.div `
    text-align: center;
    padding-bottom: 1.5rem;
    .order__wrapper{
        display: flex;
        justify-content: center;
        margin-bottom: 7rem;

        p{
            margin-right: 20px;
        }
    }
`

export const TrackP = styled.p `
    color: ${({green}) => (green ? "#08862D" : "#2A2A2A")};
    font-style: normal;
    font-weight: ${({af}) => (af ? "noraml" : "500")};
    font-size: ${({smallfs}) => (smallfs ? "16px" :"20px")};
    line-height: ${({smalh}) => (smalh ? "26px":"45px")};
    text-transform: ${({active}) => (active ? "uppercase" : "")};
`

export const TrackH4 = styled.p `
    color: #08862D;
    font-style: normal;
    font-weight: 500;
    font-weight:500;
    font-size: ${({smallfs}) => (smallfs ? "15px" :"20px")};
    line-height: 36px;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
`

