import styled from  'styled-components'
import {ContainerFluid} from '../../GlobalStyles'


export const AccountContainer = styled(ContainerFluid) `
    display: flex;
    width: 90%;
    margin-top: 2rem;
    justify-content: space-between;
    ${ContainerFluid};
`;

export const AccountLeft = styled.div `
    flex: 3;
    display:flex;
    flex-direction: column;
    padding: 0 10px 0px 10px;
`

export const AccountRight = styled.div `
    flex: 8;
    background: #FFFFFF;
    border-radius: 10px;
`

export const Card = styled.div `
    background-color:  #FFFFFF;
    display: flex;
    flex-direction: column;
    border: ${({activeBorder}) => (activeBorder ? "1px solid #DAD9D9" : "")};
    border-radius: ${({activeBR}) => (activeBR ? "" : "10px")};
    width: ${({activeWidth}) => (activeWidth ? "390px" : "")};
    max-width: ${({activeMW}) => (activeMW ? "390px" : "")};
    height: ${({activeHeight}) => (activeHeight ? "350px" : "")};
    position: relative;
    margin-bottom: 3rem;
    margin-right: ${({activeMRC}) => (activeMRC ? "1.5rem" : "")};
`
export const CardContainer = styled.div `
    display: flex;
    padding: 0 3%;
`

export const CardHeader = styled.div `
    position: relative;
    background: ${({accountBack}) => (accountBack ? "" : "#08862D")};
    border-top-right-radius: ${({accountBTRR}) => (accountBTRR ? "" : "10px")};
    border-top-left-radius: ${({accountBTLR}) => (accountBTLR ? "" : "10px")};
    border-bottom: ${({accountBB}) => (accountBB ? "1px solid #DAD9D9" : "")};
    padding : ${({activePH}) => (activePH ? ".9rem 1rem .55rem 1rem" : ".9rem 0 .9rem 0")};


   p{
        color: #FFFFFF;
        font-size: 18px;
        line-height: 27px;
        font-weight: 300;
        text-align: center;
   }
`

export const CardBody = styled.div `
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: ${({activePadding})=>(activePadding ? '1rem 0 1rem 0' : ".4rem 0 .4rem 0")};
    padding-left: ${({paddingRight}) => (paddingRight ? "1.8rem" : "1rem" )};
`
export const CardRow = styled.div `
    display: flex;
    align-items: center;
    padding : ${({activePD}) => (activePD ? "0" : "1.15rem 0 1.15rem 0")};
    justify-content: ${({activeJC}) => (activeJC ? "space-between" : "")};
    align-items: center;
`

export const CardIcon = styled.img `
    display: block;
    margin: 0;
    padding: 0;
`

export const CardName = styled.p `
    color: #686868;
    font-weight: normal;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    line-height: 27px;
    text-transform: capitalize;
    margin-left: .6rem;
`

export const CardTitle = styled.p `
    color: #686868 !important ;
    font-weight: normal;
    font-size: 24px;
    font-weight: 400;
    font-style: normal;
    line-height: 27px;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
`

export const CardFooter = styled.div `
    background: #08862D;
    text-transform: uppercase;
    border-bottom-right-radius:10px;
    border-bottom-left-radius:10px;
    padding: .8rem 0 .8rem 0;

   p{
        color: #FFFFFF;
        font-size: 18px;
        line-height: 27px;
        font-weight: 300;
        text-align: center;
   }
`

export const CardDetails = styled.h2 `
    color: #686868;
    font-size: 24px;
    line-height: 36px;
    font-weight: 400;
    margin-left: 1.8rem;
    margin-bottom: 1.3rem;
`
export const CardH3 = styled.p`
    font-size: ${({activeFS}) => (activeFS ? "16px" : "19px")};
    line-height: 36px;
    height: ${({activeH}) => (activeH ? "3.5rem" : "")};
    color: ${({activeCH3}) => (activeCH3 ? "#686868" : "#BDB8B8")};
    font-weight: ${({activeFW}) => (activeFW ? "400" : "normal")};
    font-family: 'poppins';
    text-transform: ${({activeTT}) => (activeTT ? "" : "capitalize")};
    max-width: ${({activeW}) => (activeW ? "90%" : "")};

    span{
        font-size: 19px !important;
        color:  #BDB8B8;
    }
`

export const CardButton = styled.button `
    position: absolute;
    bottom: .9rem;
    background: none;
    border:none;
    text-align: left;
    font-size: 19px;
    font-weight: 500;
    line-height: 36px;
    color: #08862D;
    text-transform: uppercase;
`

// UPload File Container
export const AccountH1 = styled.h1 `
    font-weight: normal;
    font-size: 36px;
    line-height: 54px;
    color: #686868;
    text-transform: capitalize;
`
export const AccountUpload = styled.div ``
export const SearchContainer = styled.div ``
export const SearchInput = styled.input ``
export const SearchButton = styled.button ``