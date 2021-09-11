import React from 'react'
import {Navbar, Footer} from '../../component'
import {
    CheckContainer, CheckLeft, CheckRight,
    CardContainer, Card, CardHeader, CardBody,CardRow, CardIcon, CardName, CardTitle, CardH3, CardP, CardCheck,
    PayContainer,
    SearchContainer, SearchInput, SearchButton,
    CheckAccount, CheckPrice,
    Notice, Confirm, ConfirmContainer,
    DContainer, DP, DS, PayM
} from './CheckOut_element'
import Check from '../../images/icons/check.png'
import Cod from '../../images/icons/cod-f90.png'
export default function CheckOut() {
    return (
        <>
            <Navbar/>
            <CheckContainer>
                <CheckRight>
                    <CardContainer>
                        <Card>
                            <CardHeader activePH activeBB>
                                <CardRow activeJC activePD>
                                    <CardTitle>
                                    1. address details
                                    </CardTitle>
                                    <CardIcon>Change</CardIcon>
                                </CardRow>
                            </CardHeader>

                            <CardBody activePB>
                                <CardH3 activeCH3>olatunji abiodun</CardH3>
                                <CardH3 activeTT activeFS activeW>N19, Block 45 Isolo, Nigeria street, Lagos state, Nigeria....</CardH3>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader activePH>
                                <CardRow activeJC activePD>
                                    <CardTitle>
                                    2. delivery method
                                    </CardTitle>
                                    <CardIcon>Change</CardIcon>
                                </CardRow>
                            </CardHeader>

                            <CardBody activePB>
                                <CardH3 activeCH3>how do you want your order delivered?</CardH3>
                                <PayM>
                                    <CardCheck src={Check} />
                                    <DContainer>
                                        <DP>door delivery</DP>
                                        <p class="p-only">Delivered between Thursday 9 Jul and Wednesday 15 Jul for ₦ 1,200</p>
                                    </DContainer>
                                </PayM>
                                <PayM>
                                    <CardCheck src={Check} />
                                    <DContainer>
                                        <DP>pickup station</DP>
                                        <p class="p-only">Ready to pickup between Tuesday 7 Aug to Monday 13 with cheaper shipping fees</p>
                                        <div>
                                            <DS>Select pick-up station to enjoy</DS>
                                            <DS>- Cheaper delivery fees</DS>
                                            <DS>-Scheduled pickup at your own convenience</DS>
                                        </div>
                                    </DContainer>
                                </PayM>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader activePH>
                            <CardRow activeJC activePD>
                                    <CardTitle>
                                    3. payment method
                                    </CardTitle>
                                    <CardIcon>Change</CardIcon>
                                </CardRow>
                            </CardHeader>

                            <CardBody activePB>
                                <CardH3 activeCH3>how do you want to pay for your order?</CardH3>
                                <CardRow activeMT>
                                    <CardCheck src ={Check} />
                                    <CardCheck src= {Cod} />
                                    <p class ="pd">Pay on delivery (Pay via JumiaPay on Delivery/ POS)</p>
                                </CardRow>
                                <CardP mt1>- Kindly note that you would have to make payment before opening your package.</CardP>
                                <CardP>- Once the seal is broken, the item can only be returned if it is damaged, defective or has missing parts.</CardP>            
                                <PayContainer>
                                    <p class="paycontainer">Got a voucher / SureGifts voucher? Use it below:</p>
                                    <CardRow activeMB>
                                        <SearchContainer>
                                            <SearchInput placeholder="PROMO2324"/>
                                        </SearchContainer>
                                        <SearchButton>Submit</SearchButton>
                                    </CardRow>
                                    {/* This Four Column below will Later be change to Table */}
                                    <CardRow activeJC activeMT>
                                        <CheckAccount>subtotal</CheckAccount>
                                        <CheckPrice>₦3,890</CheckPrice>
                                    </CardRow>

                                    <CardRow activeJC>
                                        <CheckAccount>shipping amount</CheckAccount>
                                        <CheckPrice>₦2,400</CheckPrice>
                                    </CardRow>

                                    <CardRow activeJC>
                                        <CheckAccount>promo code</CheckAccount>
                                        <CheckPrice>-₦199</CheckPrice>
                                    </CardRow>
                                    <CardRow activeJC>
                                        <CheckAccount activeC>total</CheckAccount>
                                        <CheckPrice activeC>₦6,109</CheckPrice>
                                    </CardRow>
                                    <Notice>You will be able to add a voucher in the next step</Notice>
                                    <ConfirmContainer>
                                        <Confirm>Confirm Order</Confirm>
                                    </ConfirmContainer>
                                </PayContainer>
                            </CardBody>
                        </Card>
                    </CardContainer>
                </CheckRight>

                    <CheckLeft>
                        <Card>
                            <CardHeader>
                               <p>My Check</p> 
                            </CardHeader>
                            <CardBody paddingRight>
                                <CardRow>
                                    <CardIcon src =""/>
                                    <CardName>
                                        Orders
                                    </CardName>
                                </CardRow>
                                
                                
                                <CardRow>
                                    <CardIcon src =""/>
                                    <CardName>
                                        Saved Items
                                    </CardName>
                                </CardRow>

                                <CardRow>"
                                    <CardIcon src =""/>
                                    <CardName>
                                        Recently Viewed
                                    </CardName>
                                </CardRow>
   
                            </CardBody>
                        </Card>
                    </CheckLeft>
                </CheckContainer>
            <Footer />
        </>
    )
}
