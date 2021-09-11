import styled from 'styled-components';
import HeroBannerImage from '../../images/banner.png'
import {Container} from '../../GlobalStyles'


export const HeroBanner = styled.div `
    background-image: url(${HeroBannerImage});
    height: 390px;
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width: 1144px){
        display: none;
    }
`

export const HeroText = styled.div `
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const HeroHeader = styled.h1 `
    color: #FFFFFF;
    font-size: 64px;
    font-weight: 600px;
    line-height: 96px;
    letter-spacing: 11.5px;
    text-transform: uppercase;
`

export const HeroDescription = styled.p `
    color: #FFFFFF;
    font-size: 15px;
    line-height: 21px;
    font-size: normal;
`

export const ShopContainer = styled(Container)`
    display: flex;
    width: 90%;
    margin-top: 5rem;
    justify-content: space-between;
    ${Container};

    @media screen and (max-width: 1144px){
        display: none !important;
    }
`;

export const ShopLeft = styled.div `
    flex: 3;
    display:flex;
    flex-direction: column;
    padding: 0 10px 0px 10px;
`
export const ShopRight = styled.div `
    flex: 9;
`

export const ShopCartOne = styled.div `
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
export const ShopProductContainer = styled.div `
    display: flex;
    flex-direction : column;
    align-items: center;
    margin: .5rem;
`
export const ShopProductOne = styled.div `
    position: relative;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 207px;
    max-height: 207px;
    border-radius: 5px;
    background: #FFFFFF;
    box-shadow: ${({activeBoxShadow}) => (activeBoxShadow ? ' 0px 2px 4px rgba(100, 100, 100, 0.498039)' : '')};
    border-radius: 5px;

    /* &:hover{

    } */
`

export const ShopProductOneImg = styled.img`
    max-width: 100%;
    display: block;
`

/*===== Dummy Export ========= */
// export const Cart = styled.img `
//     display: block;
// `
// export const Heart = styled.img`
//     display: block;
//  `
// export const Search = styled.img`
//     display: block;
// `
/*===== End Dummy Export ========= */

export const ShopProductAddToCart = styled.img`
    position: absolute;
    width: 100%;
    height: 51px;
    bottom: 0px;
    background: #08862D;
`

export const ShopProductTitle = styled.p `
    font-family: Poppins;
    font-style: medium;
    font-size: 18px;
    line-height: 27px;
    padding-top: .5rem;
    color: ${({activeProductTitle}) => (activeProductTitle ? '#08862D ' : '#868686')};
    text-transform: capitalize;
`

export const ShopProductPrice = styled.p `
    font-style: medium;
    font-size: 13px;
    line-height: 20px;
    color: #868686;
    text-transform: capitalize;
`
export const ShopProductBanner = styled.div `
    background-image: url(${HeroBannerImage});
    height: 176px;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2.5rem 1rem 3rem 1rem;
`

export const ShopProductBannerText = styled.p `
    font-weight: 600;
    font-style: normal;
    font-size: 24px;
    line-height: 24px;
    text-transform: uppercase;
    text-align: center;
    color: #FFFFFF;
    letter-spacing: 3.7px;
`

export const ShopArrowContainer = styled.div `
    width: 61px;
    height: 61px;
    background: #08862D;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    justify-self: center;
    align-items: center;
    align-self: center;
    margin: 1rem 0 2.5rem 0;

`
export const Arrow = styled.img `

`
export const Search = styled.p `
    font-size: 24px;
    line-height: 46px;
    font-weight: 600;
    color: #2A2A2A;
    text-transform: uppercase;
    margin-bottom: .5rem;
`

export const SearchContainer =styled.div `
    padding:  2px 5px 2px 8px;
    background: #DFECF1;
    border: 1px solid #ddd;
    border-radius:7px;
    display: flex;
    width: 100%;
    height: 46px;
    align-items: center;
`
export const SearchInput = styled.input `
    font-size: 14px;
    line-height: 21px;
    background: #DFECF1;
    width: 90%;
    color: #939393;
    border: unset !important;
    outline: unset !important;

`
export const SearchBack = styled.img `

`

/* =========== CATERGORY ==============*/
export const ShopCatergories = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
`
export const CatSectionContainer = styled.div `

`
export const CatSection = styled.div `
    display: flex;
    justify-content: space-between;
    height: 35px;
`

export const CatTitle = styled.h3 `
    font-size: 24px;
    line-height: 46px;
    font-weight: 600;
    color: #2A2A2A;
    margin-bottom: .5rem;
    text-transform: uppercase;
`

export const CatSubTitle = styled.p `
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: ${({activeCat}) => (activeCat ? '#08862D' : '#868686')};
`

export const CatSubCount = styled.p `
    color: ${({activeCat}) => (activeCat ? '#08862D' : '#868686')};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`
/* =========== END CATERGORIES  ==============*/

/* =========== BEST SELLER  ==============*/
export const BestSeller = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
`
export const BestContainer = styled.div `

`
export const BestTitle = styled.h3 `
    font-size: 24px;
    line-height: 46px;
    font-weight: 600;
    color: #2A2A2A;
    margin-bottom: .5rem;
    text-transform: uppercase;
`
export const BestRow = styled.div `
    display: flex;
    align-items: center;
    margin-bottom: 1.2rem;
`
export const BestImageCon = styled.div `
    width: 62px;
    height: 62px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(100, 100, 100, 0.498039);
    margin-right: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
`
export const BestImage = styled.img `
    width: auto;
    display: block;
`
export const BestDesc = styled.div `
    display: flex;
    flex-direction: column;
`
export const BestDescTitle = styled.p `
   color: #868686;
   font-size: 14px;
   line-height: 21px;
   text-transform: capitalize;
`
export const BestDescPrice = styled.p `
    color: #08862D;
    font-size: 10px;
    line-height: 15px;
    font-weight: 500;
`
/* =========== END BEST SELLER  ==============*/

/* =========== CART ==============*/
export const Cart = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
`
export const CartHeader = styled.h3 `
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;
    color: #2A2A2A;
    margin-bottom: .3rem;
    text-transform: uppercase;
`
export const NoProduct = styled.div `
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #BDB8B8;
`
/* =========== END CART ==============*/

/* =========== SEARCH BY TAG  ==============*/
export const STag = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
`
export const STagHeader = styled.h3  `
    font-size: 24px;
    line-height: 46px;
    font-weight: 600;
    color: #2A2A2A;
    margin-bottom: .5rem;
    text-transform: uppercase;
`
export const STagCon = styled.div `
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`
export const STagTitle = styled.div `
    border: ${({activeborderTag}) => (activeborderTag ? '1px solid #08862D' : '1px solid #BDB8B8')};
    padding: .5rem 1rem;
    border-radius: 5px;
    color: ${({activeTagColor}) => (activeTagColor ? '#08862D' : '#BDB8B8')};
    font-weight: 400;
    line-height:21px;
    margin:0 .5rem .8rem 0;
    text-transform: capitalize;
`
/* ===========END SEARCH BY TAG  ==============*/


export const OngoingProject = styled.div  `
    width: 100%;
    height: 100%;
    position: relative;
    padding: 2rem;
    display: flex;
    display: none;

    @media screen and (max-width: 1144px){
        display: block !important;
    }
`

export const OngoingDiv = styled.div `
    width: 70%;
    background-color: #08862d;
    position: absolute;
    padding: 5rem 2rem;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(-50%, 30%);
    font-size: 1.8rem;
    color: #FFFFFF;
    text-align: center;
    display: none;

    @media screen and (max-width: 1144px){
        display: block !important;
    }
`