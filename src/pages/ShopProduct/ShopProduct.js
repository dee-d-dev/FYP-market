import React from 'react'
import {Navbar, Footer} from '../../component'
import {HeroBanner, HeroText, HeroHeader, HeroDescription, ShopContainer, ShopRight, ShopLeft, ShopCartOne,ShopProductContainer, ShopProductOne, ShopProductOneImg, ShopProductAddToCart, ShopProductTitle, ShopProductPrice, ShopProductBanner, ShopProductBannerText,ShopArrowContainer, Arrow,ShopCatergories,Search, SearchInput, CatTitle, CatSectionContainer, CatSection, CatSubTitle, CatSubCount, SearchContainer, SearchBack,BestSeller, BestContainer, BestTitle, BestRow, BestImageCon, BestImage, BestDesc, BestDescTitle, BestDescPrice,Cart,CartHeader, NoProduct,STag, STagHeader, STagCon, STagTitle,OngoingProject, OngoingDiv} from './ShopProduct_element'
import GreenLimes from '../../images/product/GreenLimes_jrodle.png'
import Leave from '../../images/product/5efbd0e39f63c.png'
import Mango from '../../images/product/Mangoes_ruaapa.png'
import Yellow from '../../images/product/Yellow_Limes_y0lbyo.png'
import Cumcumber from '../../images/product/Cucumber_w6hlxr.png'
import Pepper from '../../images/product/MiniPeppers_iydh8m.png'
import Orange from '../../images/product/5efbd1214ce88.png'
import Apple from '../../images/product/Apples_dmwvrq.png'
import ArrowDown from '../../images/icons/arrow_down.png'
import SearchIcon from '../../images/icons/forward_search.png'
import Meat from '../../images/product/5efbd3b6b6f3d.png'
import Fish from '../../images/product/5efbd491488f7.png'
import Turkey from '../../images/product/5efbd3ffa7390.png'
import Egg from '../../images/product/5efbd4394e1fe.png'
import Vegetable from '../../images/product/oil_1_2_3_vegitable.png'
import Carrot from '../../images/product/Peeled_Carrots_xx7mjo.png'
import BestWaterLemon from '../../images/bestSeller/5efbd0c2423a3.png'
import BestApple from '../../images/bestSeller/5efbd104f3e5b.png'
import BestOil from '../../images/bestSeller/oil_daisy.png'
export default function ShopProduct() {
    return (
        <>
            <Navbar/>
            <HeroBanner>
                <HeroText>
                    <HeroHeader>
                        shop products
                    </HeroHeader>
                    <HeroDescription>
                        Enjoy unbeatable deals on every products you bought only on Marketplace today 
                    </HeroDescription>
                </HeroText>
            </HeroBanner>
            
            <ShopContainer>
                <ShopLeft>
                    <Search>Search</Search>
                    <SearchContainer>
                        <SearchInput placeholder="Product search"/>
                        <SearchBack src={SearchIcon}/>
                    </SearchContainer>

                    <ShopCatergories>
                        <CatTitle>
                            Catergories
                        </CatTitle>
                        <CatSectionContainer>
                            <CatSection>
                                <CatSubTitle>
                                    Vegetables
                                </CatSubTitle>
                                <CatSubCount>
                                    (56)
                                </CatSubCount>
                            </CatSection>

                            <CatSection>
                                <CatSubTitle activeCat>
                                    Fruits
                                </CatSubTitle>
                                <CatSubCount activeCat>
                                    (53)
                                </CatSubCount>
                            </CatSection>

                            <CatSection>
                                <CatSubTitle>
                                    Cow Meat
                                </CatSubTitle>
                                <CatSubCount>
                                    (46)
                                </CatSubCount>
                            </CatSection>

                            <CatSection>
                                <CatSubTitle>
                                    Juice
                                </CatSubTitle>
                                <CatSubCount>
                                    (26)
                                </CatSubCount>
                            </CatSection>

                            <CatSection>
                                <CatSubTitle>
                                    Snapple
                                </CatSubTitle>
                                <CatSubCount>
                                    (16)
                                </CatSubCount>
                            </CatSection>

                            <CatSection>
                                <CatSubTitle>
                                    Package
                                </CatSubTitle>
                                <CatSubCount>
                                    (36)
                                </CatSubCount>
                            </CatSection>
                        </CatSectionContainer>
                    </ShopCatergories>

                    <BestSeller>
                        <BestContainer>
                            <BestTitle>
                                best seller
                            </BestTitle>
                            <BestRow>
                                <BestImageCon>
                                    <BestImage src={BestWaterLemon}/>
                                </BestImageCon>
                                <BestDesc>
                                    <BestDescTitle>
                                        fresh water lemon
                                    </BestDescTitle>
                                    <BestDescPrice>
                                        N300
                                    </BestDescPrice>
                                </BestDesc>
                            </BestRow>

                            <BestRow>
                                <BestImageCon>
                                    <BestImage src={BestApple}/>
                                </BestImageCon>
                                <BestDesc>
                                    <BestDescTitle>
                                       apples
                                    </BestDescTitle>
                                    <BestDescPrice>
                                        N300
                                    </BestDescPrice>
                                </BestDesc>
                            </BestRow>

                            <BestRow>
                                <BestImageCon>
                                    <BestImage src={BestOil}/>
                                </BestImageCon>
                                <BestDesc>
                                    <BestDescTitle>
                                        daisy oil
                                    </BestDescTitle>
                                    <BestDescPrice>
                                        N300
                                    </BestDescPrice>
                                </BestDesc>
                            </BestRow>
                        </BestContainer>
                    </BestSeller>
                    
                    <Cart>
                        <CartHeader>Cart</CartHeader>
                        <NoProduct>
                            No product in the cart
                        </NoProduct>
                    </Cart>

                    <STag>
                        <STagHeader>search by tags</STagHeader>
                        <STagCon>
                            <STagTitle>
                                Fruits
                            </STagTitle>
                            <STagTitle activeborderTag activeTagColor>
                                Organic
                            </STagTitle>
                            <STagTitle>
                                Juice
                            </STagTitle>
                            <STagTitle>
                                Vegetables
                            </STagTitle>
                            <STagTitle>
                                Orange
                            </STagTitle>
                            <STagTitle>
                                Fresh Berries
                            </STagTitle>
                        </STagCon>
                    </STag>
                </ShopLeft>
                <ShopRight>
                    <ShopCartOne>
                        <ShopProductContainer>
                            <ShopProductOne>
                                <ShopProductOneImg src={GreenLimes}/>
                                <ShopProductAddToCart>
                                    {/* <Search src={WhiteSearch}/>
                                    <Cart src={WhiteCart}/>
                                    <Heart src={WhiteHeart}/>  */}
                                </ShopProductAddToCart>
                            </ShopProductOne>
                            <ShopProductTitle activeProductTitle>
                                    Green Lemon
                                </ShopProductTitle>
                                <ShopProductPrice>
                                    N30
                                </ShopProductPrice>
                        </ShopProductContainer>
                        <ShopProductContainer>
                            <ShopProductOne activeBoxShadow>
                                <ShopProductOneImg src={ Mango}/>
                            </ShopProductOne>
                            <ShopProductTitle>
                                Mangoes
                            </ShopProductTitle>
                            <ShopProductPrice>
                                N30
                            </ShopProductPrice>
                        </ShopProductContainer>

                        <ShopProductContainer>
                            <ShopProductOne activeBoxShadow>
                                <ShopProductOneImg src={Yellow}/>
                            </ShopProductOne>
                            <ShopProductTitle>
                                    Yellow Lemon
                            </ShopProductTitle>
                            <ShopProductPrice>
                                N30
                            </ShopProductPrice>
                        </ShopProductContainer>

                        <ShopProductContainer>
                            <ShopProductOne activeBoxShadow>
                                <ShopProductOneImg src={Cumcumber}/>
                            </ShopProductOne>
                            <ShopProductTitle>
                                Cumcumber
                            </ShopProductTitle>
                            <ShopProductPrice>
                                N30
                            </ShopProductPrice>
                        </ShopProductContainer>

                        <ShopProductContainer>
                            <ShopProductOne activeBoxShadow>
                                <ShopProductOneImg src={Leave}/>
                            </ShopProductOne>
                            <ShopProductTitle>
                                Cabagge
                            </ShopProductTitle>
                            <ShopProductPrice>
                                N30
                            </ShopProductPrice>
                        </ShopProductContainer>

                        <ShopProductContainer>
                            <ShopProductOne activeBoxShadow>
                                <ShopProductOneImg src={GreenLimes}/>
                            </ShopProductOne>
                            <ShopProductTitle >
                                Green Lemon
                            </ShopProductTitle>
                            <ShopProductPrice>
                                N30
                            </ShopProductPrice>
                        </ShopProductContainer>

                        <ShopProductContainer>
                            <ShopProductOne activeBoxShadow>
                                <ShopProductOneImg src={Pepper}/>
                            </ShopProductOne>
                            <ShopProductTitle>
                                Pepper
                            </ShopProductTitle>
                            <ShopProductPrice>
                                N30
                            </ShopProductPrice>
                        </ShopProductContainer>

                        <ShopProductContainer>
                            <ShopProductOne activeBoxShadow>
                                <ShopProductOneImg src={Orange}/>
                            </ShopProductOne>
                            <ShopProductTitle>
                                Orange
                            </ShopProductTitle>
                            <ShopProductPrice>
                                N30
                            </ShopProductPrice>
                        </ShopProductContainer>

                        <ShopProductContainer>
                            <ShopProductOne  activeBoxShadow>
                                <ShopProductOneImg src={Apple}/>
                            </ShopProductOne>
                            <ShopProductTitle>
                                Apple
                            </ShopProductTitle>
                            <ShopProductPrice>
                                N30
                            </ShopProductPrice>
                        </ShopProductContainer>

                    </ShopCartOne>

                    <ShopProductBanner>
                        <ShopProductBannerText>
                                    sell our best fruit
                        </ShopProductBannerText>
                    </ShopProductBanner>

                    <ShopCartOne>
                        <ShopProductContainer>
                            <ShopProductOne activeBoxShadow>
                                <ShopProductOneImg src={Meat}/>
                            </ShopProductOne>
                            <ShopProductTitle>
                                Meat
                            </ShopProductTitle>
                            <ShopProductPrice>
                                N5000
                            </ShopProductPrice>
                        </ShopProductContainer>

                        <ShopProductContainer>
                            <ShopProductOne activeBoxShadow>
                                <ShopProductOneImg src={ Fish}/>
                            </ShopProductOne>
                            <ShopProductTitle>
                                Fish
                            </ShopProductTitle>
                            <ShopProductPrice>
                                N30
                            </ShopProductPrice>
                        </ShopProductContainer>

                        <ShopProductContainer>
                            <ShopProductOne activeBoxShadow>
                                <ShopProductOneImg src={Turkey}/>
                            </ShopProductOne>
                            <ShopProductTitle>
                                Chicken
                            </ShopProductTitle>
                            <ShopProductPrice>
                                N30
                            </ShopProductPrice>
                        </ShopProductContainer>

                        <ShopProductContainer>
                            <ShopProductOne activeBoxShadow>
                                <ShopProductOneImg src={Egg}/>
                            </ShopProductOne>
                            <ShopProductTitle>
                                Eggs
                            </ShopProductTitle>
                            <ShopProductPrice>
                                N30
                            </ShopProductPrice>
                        </ShopProductContainer>

                        <ShopProductContainer>
                            <ShopProductOne activeBoxShadow>
                                <ShopProductOneImg src={Vegetable}/>
                            </ShopProductOne>
                            <ShopProductTitle>
                                Vegetable Oil
                            </ShopProductTitle>
                            <ShopProductPrice>
                                N30
                            </ShopProductPrice>
                        </ShopProductContainer>

                        <ShopProductContainer>
                            <ShopProductOne activeBoxShadow>
                                <ShopProductOneImg src={Carrot}/>
                            </ShopProductOne>
                            <ShopProductTitle >
                                Green Lemon
                            </ShopProductTitle>
                            <ShopProductPrice>
                                N30
                            </ShopProductPrice>
                        </ShopProductContainer>

                    </ShopCartOne>

                    <ShopProductContainer>
                        <ShopArrowContainer>
                            <Arrow src={ArrowDown}/>
                        </ShopArrowContainer>
                    </ShopProductContainer>           
                </ShopRight>
            </ShopContainer>
            <Footer/>

            <OngoingProject>
                <OngoingDiv>
                    Project is an ongoing project <br/><br/>
                    Please Kindly Check My Ongoing Project on Desktop Mode
                </OngoingDiv>
            </OngoingProject>
        </>
    )
}
