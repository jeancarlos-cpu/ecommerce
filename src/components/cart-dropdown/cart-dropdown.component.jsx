import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/card.selectors';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                        cartItems.map(item => <CartItem key={item.id} item={item} />)
                        :
                        <span className='empty-msg'>Your cart is empty</span>
                }
            </div>
            {
                cartItems.length ?
                    <CustomButton
                        onClick={() => {
                            dispatch(toggleCart())
                            history.push('/checkout')
                        }}>
                        FINISH
                        </CustomButton>
                    : null
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));