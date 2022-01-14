import React, { useContext } from 'react';
import styled from 'styled-components';
import AuthContext from '../auth-context'

const termsContent = 
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim neque volutpat ac tincidunt vitae semper quis. Justo nec ultrices dui sapien eget. Id cursus metus aliquam eleifend mi in nulla posuere. Semper feugiat nibh sed pulvinar proin gravida. Viverra adipiscing at in tellus integer. Aenean et tortor at risus. Tincidunt vitae semper quis lectus nulla at volutpat diam. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Tincidunt dui ut ornare lectus sit amet est placerat in. Vitae auctor eu augue ut lectus arcu bibendum at. Iaculis nunc sed augue lacus. Justo nec ultrices dui sapien eget mi proin sed. In massa tempor nec feugiat nisl. Facilisis mauris sit amet massa vitae. Curabitur gravida arcu ac tortor dignissim. Nisi est sit amet facilisis. Aliquet sagittis id consectetur purus. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Justo laoreet sit amet cursus. Sit amet porttitor eget dolor morbi. Integer quis auctor elit sed. Neque sodales ut etiam sit amet nisl. Ut lectus arcu bibendum at varius vel. Augue interdum velit euismod in pellentesque massa placerat duis. Donec et odio pellentesque diam volutpat commodo sed. Lacus luctus accumsan tortor posuere ac. Egestas diam in arcu cursus euismod quis viverra nibh cras. Facilisis leo vel fringilla est. Quisque egestas diam in arcu cursus euismod quis. Est placerat in egestas erat imperdiet sed. Neque laoreet suspendisse interdum consectetur libero id. At augue eget arcu dictum varius duis at. Quam pellentesque nec nam aliquam sem et tortor. In est ante in nibh mauris. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Dignissim convallis aenean et tortor. Quis varius quam quisque id diam vel quam. Ac placerat vestibulum lectus mauris ultrices eros. Ultricies leo integer malesuada nunc vel. Urna et pharetra pharetra massa massa. Diam vulputate ut pharetra sit amet aliquam. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Vivamus at augue eget arcu dictum varius duis at consectetur."

const OrderPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const OrderDetails = styled.div`
  min-width: 40rem;
  border-radius: 10px;
  padding: 2.5rem;
  box-shadow:
  5.3px 1.9px 6.8px rgba(0, 0, 0, 0.033),
  10.6px 3.7px 16.4px rgba(0, 0, 0, 0.044),
  16.4px 5.8px 30.8px rgba(0, 0, 0, 0.049),
  24.2px 8.5px 54.9px rgba(0, 0, 0, 0.052),
  37.5px 13.2px 102.8px rgba(0, 0, 0, 0.055),
  77px 27px 246px rgba(0, 0, 0, 0.07);
  
  h2 {
    font-size: ${({theme}) => theme.fontSize.h2};
    text-align: center;
    margin-bottom: 1.5rem;
  }

  h4 {
    font-size: ${({theme}) => theme.fontSize.h4};
    margin-bottom: 1rem;

    span {
      text-decoration: underline;
    }
  }
`
const TermsAgreement = styled.div`
  margin-top: 5rem;
  width: 40rem;
  height: 20rem;
  overflow-y: scroll;
  border-radius: 10px;
  padding: 2.5rem;
  box-shadow:
  5.3px 1.9px 6.8px rgba(0, 0, 0, 0.033),
  10.6px 3.7px 16.4px rgba(0, 0, 0, 0.044),
  16.4px 5.8px 30.8px rgba(0, 0, 0, 0.049),
  24.2px 8.5px 54.9px rgba(0, 0, 0, 0.052),
  37.5px 13.2px 102.8px rgba(0, 0, 0, 0.055),
  77px 27px 246px rgba(0, 0, 0, 0.07);

  h3 {
    font-size: ${({theme}) => theme.fontSize.h3};
    margin-bottom: 1.5rem;
  }
  p {
    font-size: ${({theme}) => theme.fontSize.p};
  }
`
const TermsBox = styled.div`
  margin-top: 1.5rem;
  width: 40rem;
  display: flex;
  justify-content: center;

  label {
    display: flex;
    align-items: center;
    font-size: ${({theme}) => theme.fontSize.h4};
  }

  input {
    margin-right: 1rem;
  }
`
const PaymentContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  min-width: 40rem;
  border-radius: 10px;
  padding: 2.5rem;
  box-shadow:
  5.3px 1.9px 6.8px rgba(0, 0, 0, 0.033),
  10.6px 3.7px 16.4px rgba(0, 0, 0, 0.044),
  16.4px 5.8px 30.8px rgba(0, 0, 0, 0.049),
  24.2px 8.5px 54.9px rgba(0, 0, 0, 0.052),
  37.5px 13.2px 102.8px rgba(0, 0, 0, 0.055),
  77px 27px 246px rgba(0, 0, 0, 0.07);  
`
const Errors = styled.p`
  color: red;
`

const OrderPayment: React.FC = () => {
  const ctx = useContext(AuthContext);

  return (
    <OrderPaymentContainer>
      <OrderDetails>
        <h2>Order Details</h2>
        <h4><span>Name:</span> {ctx.values.name}</h4>
        <h4><span>Email:</span> {ctx.values.email}</h4>
        <h4><span>Phone Number:</span> {ctx.values.phoneNumber}</h4>
        <h4><span>Drop Off Date:</span> {ctx.values.dropOffDate}</h4>
        <h4><span>Drop Off Address:</span> {ctx.values.dropOffAddress}</h4>
        <h4><span>Pick Up Date:</span> {ctx.values.pickUpDate}</h4>
        <h4><span>Pick Up Address:</span> {ctx.values.pickUpAddress}</h4>
        <h4><span>Total Bins:</span> {ctx.values.totalBins}</h4>
      </OrderDetails>
      <TermsAgreement>
        <h3>Terms and Services Agreement</h3>
        <p>
          {termsContent}
        </p>
      </TermsAgreement>
      <TermsBox>
        <label>
            <input type="checkbox" required />
            I agree
        </label>
      </TermsBox>
      <PaymentContainer>
        <form>
          <div>
            <Errors></Errors>
            <label>
              Name*
              <input 
                type="number" 
                name="name"
                placeholder="Homer Simpson" />
            </label>
          </div>
        </form>
      </PaymentContainer>
    </OrderPaymentContainer>
  )
}

export default OrderPayment;