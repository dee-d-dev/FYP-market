import styled from  'styled-components'
import {ContainerFluid} from '../../GlobalStyles'


export const CheckContainer = styled(ContainerFluid) `
    display: flex;
    width: 90%;
    margin-top: 2rem;
    justify-content: space-between;
    ${ContainerFluid};
`;

export const CheckLeft = styled.div `
    flex: 3;
    display:flex;
    flex-direction: column;
    padding: 0 10px 0px 10px;
`

export const CheckRight = styled.div `
    flex: 8;
`

export const Card = styled.div `
    background-color:  #FFFFFF;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    position: relative;
    margin-bottom: 3rem;
    
`
export const CardContainer = styled.div `
    padding: 0 3%;
`
export const CardHeader = styled.div `
    position: relative;
    border-bottom : 1px solid #DAD9D9 ;
    padding : ${({activePH}) => (activePH ? ".55rem 1.2rem .35rem 1.2rem" : ".9rem 0 .9rem 0")};

   p{
        color: #FFFFFF;
        font-size: 19px;
        line-height: 36px;
        font-weight: 500;
        text-align: center;
   }
`
export const CardBody = styled.div `
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: ${({activePB})=>(activePB ? '1.2rem 1.2rem 4.5rem 1.2rem' : ".4rem 1.8rem .4rem 1rem")};
    /* padding-left: ${({paddingRight}) => (paddingRight ? "1.8rem" : "rem" )}; */
`
export const CardRow = styled.div `
    display: flex;
    align-items: center;
    justify-content: ${({activeJC}) => (activeJC ? "space-between" : "")};
    margin-bottom: ${({activeMB}) => (activeMB ? "2.5rem" : "")};
    margin-top: ${({activeMT}) => (activeMT ? "4rem" : "")};

    .pd{
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        color: #868686;
    }
`
export const CardIcon = styled.p `
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 36px;
    color: #08862D !important;
    text-transform: uppercase;
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
    color: #868686 !important ;
    font-weight: normal;
    font-size: 21px;
    font-weight: 500;
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
export const CardH3 = styled.p`
    font-size: ${({activeFS}) => (activeFS ? "17px" : "19px")};
    line-height: 36px;
    color:#868686;
    font-weight: ${({activeFW}) => (activeFW ? "400" : "normal")};
    text-transform: ${({activeTT}) => (activeTT ? "" : "capitalize")};
    max-width: ${({activeW}) => (activeW ? "90%" : "")};
`
export const CardP = styled.p`
    margin-top: ${({mt1}) => (mt1 ? "1rem" : "")};
    color: #000000;
    font-size: 15px;
    line-height: 24px;
    width: 90%;
    margin-left: 3%;
`
export const CardCheck = styled.img `
    display: block;
    margin-right: .5rem;
`
/* ========  D style ==============*/
export const DContainer = styled.div `

    .p-only{
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 27px;
        color: #868686;
    }

    div{
        margin-top: 1.5rem;
    }
    
`
export const DP = styled.p `
    font-style: normal;
    font-weight: 600;
    text-transform: capitalize;
    font-size: 17px;
    line-height: 27px;
    color: #868686;
`
export const DS = styled.p `
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: #686868;
`
export const PayM = styled.div `
    display: flex;
    align-items: flex-start;
    margin-top: 1.8rem;
`

export const PayContainer = styled.div`
    width: 90%;
    padding: 0 20px;
    height: 400px;
    margin: 2rem auto 8rem auto;

    .paycontainer{
        font-size: 15px;
        color: #868686;
        margin: 1rem 0;
    }
`
export const SearchContainer = styled.div `
    padding:  2px 5px 2px 2rem;
    background: #868686;
    border-radius:8px;
    display: flex;
    width: 56.5%;
    height: 55px;
    align-items: center;
    margin-right: .8rem;
`
export const SearchInput = styled.input`
    font-size: 14px;
    line-height: 21px;
    background: #868686;
    width: 90%;
    color: #BDB8B8;
    border: unset !important;
    outline: unset !important;

    ::placeholder{
        color: #BDB8B8;
    }
`
export const SearchButton = styled.button`
    height: 55px;
    padding: 0 2rem ;
    background: #868686;
    font-size: 15px;
    text-transform: uppercase;
    line-height: 21px;
    font-weight: normal;
    color: #FFFFFF;
    border-radius: 8px;
    border: none;
    /* margin-bottom: 2rem; */
`

export const CheckAccount = styled.p `
    text-transform: capitalize;
    font-size: 18px !important;
    font-weight: normal;
    line-height: 30px;
    color: ${({activeC}) => (activeC ? "#08862D !important" : " #868686;")};
`
export const CheckPrice = styled.p `
    text-transform: capitalize;
    font-size: 18px !important;
    font-weight: 500 !important;
    line-height: 40px;
    color: ${({activeC}) => (activeC ? "#08862D !important" : " #868686;")};
`
export const Notice = styled.p `
    text-align: center;
    font-weight: 400px;
    font-size: 15px;
    color: #AEAEAE;
    margin-top: 3rem;
    margin-bottom: 2rem;
`
export const Confirm = styled.button `
    height: 60px;
    width: 85%;
    border: none;
    background: #08862D;
    box-shadow: 0px 4px 9px rgba(100, 100, 100, 0.498039);
    border-radius: 10px;
    text-transform: uppercase;
    font-size: 20px;
    color: #FFFFFF;
    line-height: 36px;
`
export const ConfirmContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`
