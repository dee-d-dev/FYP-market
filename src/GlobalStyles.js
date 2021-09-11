import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle `
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'poppins';
    }

    body{
        background: #F9F9F9;
    }
`
export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    height: 100%;
    margin:0 auto;
    padding : 0 50px;
    font-family: 'poppins';


    @media screen and (max-width: 991px){
        padding: 0 30px;
    }
`;

export const ContainerFluid = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1400px;
    height: 100%;
    margin:0 auto;
    font-family: 'poppins';

    /* padding : 0 50px; */

    @media screen and (max-width: 991px){
        padding: 0 30px;
    }
`;

export default GlobalStyle