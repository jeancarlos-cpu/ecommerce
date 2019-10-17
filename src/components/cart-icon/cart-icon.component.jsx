import React from 'react';
import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/card.selectors';
import { ReactComponent as ShopprinIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCart, itemCount }) => (
    <div className='cart-icon' onClick={toggleCart}>
        <ShopprinIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);