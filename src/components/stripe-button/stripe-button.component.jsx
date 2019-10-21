import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token);
    alert("Payment Successful");
}

const StripeCheckoutButton = ({ price }) => {
    const priceInCents = price * 100;
    const publichableKey = 'pk_test_yNuoIsmfD5pOn3B0xuadQqdR00yWF88pzt';

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing S.A.'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amout={priceInCents}
            panelLAbel='Pay Now'
            token={onToken}
            stripeKey={publichableKey}
            bitcoin
        />
    )
};

export default StripeCheckoutButton;