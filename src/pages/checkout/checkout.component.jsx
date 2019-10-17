import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/card.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss'

const CheckoutPage = ({ cartItems, totalPrice }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-blocks'>
                <span>Product</span>
            </div>
            <div className='header-blocks'>
                <span>Description</span>
            </div>
            <div className='header-blocks'>
                <span>Quantity</span>
            </div>
            <div className='header-blocks'>
                <span>Price</span>
            </div>
            <div className='header-blocks'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(
                cartItem =>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }
        <div className='total'>
            <span>Total: ${totalPrice}</span>
        </div>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    totalPrice: selectCartTotal(state)
})

export default connect(mapStateToProps)(CheckoutPage);