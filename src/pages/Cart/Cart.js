import reat from 'react'
import {Navbar, Footer} from '../../component'
import {DivPro,ButtonPro,DivMoreContainer, DivMore, PMore, DivMoreItems, RowMore, ImageMoreCon, ImageMore, DescMore, DescTitle, DescPrice, AbRight, AbLeft, ImageR} from './cart_element.js'
import Mango from '../../images/product/Mangoes_ruaapa.png'
import Apple from '../../images/product/Apples_dmwvrq.png'
import Carrot from '../../images/product/Peeled_Carrots_xx7mjo.png'
import ArrowL from '../../images/icons/arrow_right.png'
import ArrowR from '../../images/icons/arrow_left.png'

export default function Cart(){
    return (
        <>
            <Navbar/>
            <DivPro>
                <p>Continue shopping</p>
                <ButtonPro>
                    <p>proceed to checkout</p>
                </ButtonPro>
            </DivPro>

            <DivMoreContainer>
                <DivMore>
                    <PMore>more products</PMore>
                    <RowMore>
                        <AbRight>
                            <ImageR src={ArrowL}/>
                        </AbRight>
                        <AbLeft>
                            <ImageR src={ArrowR}/>
                        </AbLeft>
                        <DivMoreItems>
                            <ImageMoreCon>
                                <ImageMore src={Carrot}/>
                            </ImageMoreCon>
                            <DescMore>
                                <DescTitle>
                                    mango
                                </DescTitle>
                                <DescPrice>
                                   #300
                                </DescPrice>
                                <DescPrice active>
                                   #300
                                </DescPrice>
                            </DescMore>
                        </DivMoreItems>
                        <DivMoreItems>
                            <ImageMoreCon>
                                <ImageMore src={Apple}/>
                            </ImageMoreCon>
                            <DescMore>
                                <DescTitle>
                                    Apple
                                </DescTitle>
                                <DescPrice>
                                   #300
                                </DescPrice>
                                <DescPrice active>
                                   #300
                                </DescPrice>
                            </DescMore>
                        </DivMoreItems>
                        <DivMoreItems>
                            <ImageMoreCon>
                                <ImageMore src={Carrot}/>
                            </ImageMoreCon>
                            <DescMore>
                                <DescTitle>
                                    mango
                                </DescTitle>
                                <DescPrice>
                                   #300
                                </DescPrice>
                                <DescPrice active>
                                   #300
                                </DescPrice>
                            </DescMore>
                        </DivMoreItems>
                        <DivMoreItems>
                            <ImageMoreCon>
                                <ImageMore src={Mango}/>
                            </ImageMoreCon>
                            <DescMore>
                                <DescTitle>
                                    mango
                                </DescTitle>
                                <DescPrice>
                                   #300
                                </DescPrice>
                                <DescPrice active>
                                   #300
                                </DescPrice>
                            </DescMore>
                        </DivMoreItems>
                    </RowMore>
                </DivMore>
            </DivMoreContainer>
            <DivMoreContainer>
                <DivMore>
                    <PMore>recommended</PMore>
                    <RowMore>
                        <AbRight>
                            <ImageR src={ArrowL}/>
                        </AbRight>
                        <AbLeft>
                            <ImageR src={ArrowR}/>
                        </AbLeft>
                        <DivMoreItems>
                            <ImageMoreCon>
                                <ImageMore src={Carrot}/>
                            </ImageMoreCon>
                            <DescMore>
                                <DescTitle>
                                    mango
                                </DescTitle>
                                <DescPrice>
                                   #300
                                </DescPrice>
                                <DescPrice active>
                                   #300
                                </DescPrice>
                            </DescMore>
                        </DivMoreItems>
                        <DivMoreItems>
                            <ImageMoreCon>
                                <ImageMore src={Apple}/>
                            </ImageMoreCon>
                            <DescMore>
                                <DescTitle>
                                    Apple
                                </DescTitle>
                                <DescPrice>
                                   #300
                                </DescPrice>
                                <DescPrice active>
                                   #300
                                </DescPrice>
                            </DescMore>
                        </DivMoreItems>
                        <DivMoreItems>
                            <ImageMoreCon>
                                <ImageMore src={Carrot}/>
                            </ImageMoreCon>
                            <DescMore>
                                <DescTitle>
                                    mango
                                </DescTitle>
                                <DescPrice>
                                   #300
                                </DescPrice>
                                <DescPrice active>
                                   #300
                                </DescPrice>
                            </DescMore>
                        </DivMoreItems>
                        <DivMoreItems>
                            <ImageMoreCon>
                                <ImageMore src={Mango}/>
                            </ImageMoreCon>
                            <DescMore>
                                <DescTitle>
                                    mango
                                </DescTitle>
                                <DescPrice>
                                   #300
                                </DescPrice>
                                <DescPrice active>
                                   #300
                                </DescPrice>
                            </DescMore>
                        </DivMoreItems>
                    </RowMore>
                </DivMore>
            </DivMoreContainer>

            <Footer/>
        </>
    )
}