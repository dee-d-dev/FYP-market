import React from 'react'
import {SNavbar, Footer} from '../../component'
import {
    ThankContainer,CardContainer, Card, CardBody,CardDiv,CardH3,CardP,
    ConfirmContainer, Confirm,
    TrackContainer, TrackP, TrackH4,
    CardRow, CardImg,CardWrapper, H1,H3, Order
} from './Thank_element'
import Check from  '../../images/icons/thank.png'

export default function Thank() {
    return (
         <>
            <SNavbar/>
            <CardContainer>
                <CardRow>
                    <CardImg  src={Check}/>
                    <CardWrapper>
                        <H1>Thank You!</H1>
                        <Order>
                            <H3>ORDER N<span> 362339957</span></H3>
                        </Order>
                    </CardWrapper>
                </CardRow>
            </CardContainer>
            <ThankContainer>
                <CardContainer>
                    <TrackP>NEXT STEPS</TrackP>
                    <Card>
                        <CardBody>
                            <CardDiv>
                                <CardH3>1. Confirmation</CardH3>
                                <CardP>Congratulations! Your order was successfully submitted. A confirmation email has just been sent to you and our Customer Service may contact you shortly to verify your order.</CardP>
                            </CardDiv>
                            
                            <CardDiv>
                                <CardH3>2. Shipping</CardH3>
                                <CardP>You will receive an update about your order when it has been shipped</CardP>
                            </CardDiv>

                            <CardDiv>
                                <CardH3>3. My Account</CardH3>
                                <CardP>You can follow the status of your order by clicking on "My orders" in your account pag4e</CardP>
                            </CardDiv>
                        </CardBody>
                    </Card>
                    <TrackP>TRACK YOUR ORDER</TrackP>
                    <Card>
                        <CardBody>
                            <TrackContainer>
                                <div class="order__wrapper">
                                    <TrackP af>Order placed</TrackP>
                                    <TrackP af>Processing</TrackP>
                                    <TrackP af>In-transit</TrackP>
                                    <TrackP af>In-delivery</TrackP>
                                    <TrackP af>Delivered</TrackP>
                                </div>
                                <TrackP smalh>You can track your order in</TrackP>
                                <TrackP smallfs smalh>My Account {'>'} My Orders</TrackP>
                                <ConfirmContainer>
                                    <Confirm>Go to orders</Confirm>
                                </ConfirmContainer>
                            </TrackContainer>
                            
                        </CardBody>
                    </Card>
                    <TrackContainer>
                        <TrackH4 green active smalh>continue shopping</TrackH4>
                    </TrackContainer>
                </CardContainer>
            </ThankContainer>
            <Footer/>
        </>
    )
}
