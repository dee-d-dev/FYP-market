import React from 'react'
import {Navbar, Footer} from '../../component'
import {
        AccountContainer, AccountLeft, AccountRight,
        CardContainer, Card, CardHeader, CardBody,CardRow, CardIcon, CardName, CardFooter, CardDetails, CardTitle, CardH3, CardButton,
        AccountH1, AccountUpload, SearchContainer, SearchInput, SearchButton
    } from './AccountInfo_element'
import Coupon from '../../images/icons/coupon.png'
import Recent from '../../images/icons/recent.png'
import Heart from '../../images/icons/heartShape.png'
import Pend from '../../images/icons/pend.png'
import Order from '../../images/icons/order.png'
import Pencil from '../../images/icons/pencil.png'


export default function AccontInfo() {
    return (
        <>
            <Navbar/>
                <AccountContainer>
                    <AccountLeft>
                        <Card>
                            <CardHeader>
                               <p>My Account</p> 
                            </CardHeader>
                            <CardBody paddingRight>
                                <CardRow>
                                    <CardIcon src ={Order}/>
                                    <CardName>
                                        Orders
                                    </CardName>
                                </CardRow>
                                
                                <CardRow>
                                    <CardIcon src ={Pend}/>
                                    <CardName>
                                        Pending Reviews
                                    </CardName>
                                </CardRow>
                                <CardRow>
                                    <CardIcon src ={Coupon}/>
                                    <CardName>
                                        Coupon
                                    </CardName>
                                </CardRow>
                                
                                <CardRow>
                                    <CardIcon src ={Heart}/>
                                    <CardName>
                                        Saved Items
                                    </CardName>
                                </CardRow>

                                <CardRow>
                                    <CardIcon src ={Recent}/>
                                    <CardName>
                                        Recently Viewed
                                    </CardName>
                                </CardRow>
   
                            </CardBody>
                        </Card>

                        <CardDetails>Details</CardDetails>
                        <Card paddingRight>
                            <CardBody activePadding>
                                <CardRow>
                                    <CardName>address book</CardName>
                                </CardRow>
                                <CardRow>
                                    <CardName>change password</CardName>
                                </CardRow>
                                <CardRow>
                                    <CardName>newsletter preferences</CardName>
                                </CardRow>
                            </CardBody>
                            <CardFooter>
                                <p>log out</p> 
                            </CardFooter>
                        </Card>
                    </AccountLeft>
                    <AccountRight>
                        <AccountH1>account overview</AccountH1>
                        <AccountUpload>
                            <SearchContainer>
                                <SearchInput placeholder="PROMO2324"/>
                            </SearchContainer>
                        </AccountUpload>
                        <SearchButton>Submit</SearchButton>

                        <CardContainer>
                            <Card activeBorder activeBR activeWidth activeMW activeHeight activeMRC>
                                <CardHeader  accountBTRR accountBTLR accountBack activePH accountBB>
                                    <CardRow activeJC activePD>
                                        <CardTitle>
                                        account details
                                        </CardTitle>
                                        <CardIcon src={Pencil}/>
                                    </CardRow>
                                </CardHeader>

                                <CardBody>
                                    <CardH3 activeCH3 activeH>username: <span>abiodun123</span></CardH3>
                                    <CardH3 activeCH3>olatunji abiodun michael</CardH3>
                                    <CardH3 activeTT>abiodunMichael@gmail.com</CardH3>
                                    <CardButton>Change Password</CardButton>
                                </CardBody>
                            </Card>

                            <Card  activeBorder activeBR activeWidth activeMW activeHeight>
                                <CardHeader  accountBTRR accountBTLR accountBack activePH accountBB>
                                <CardRow activeJC activePD>
                                        <CardTitle>
                                        address book
                                        </CardTitle>
                                        <CardIcon src={Pencil}/>
                                    </CardRow>
                                </CardHeader>

                                <CardBody>
                                    <CardH3  activeCH3 activeH>your default shipping address</CardH3>
                                    <CardH3 activeTT>Olatunji Abiodun</CardH3>
                                    <CardH3 activeTT activeFS activeFW activeW>N19, Block 45 Isolo, Nigeria street, Lagos state, Nigeria....</CardH3>
                                    <CardH3 activeTT activeFS activeFW>ISOLO OKOTA(OKE AFA), LAGOS. </CardH3>
                                    <CardH3 activeTT activeFS activeFW>+234 8123353667</CardH3>

                                </CardBody>
                            </Card>
                        </CardContainer>
                    </AccountRight>
                </AccountContainer>
            <Footer/>
        </>
    )
}



