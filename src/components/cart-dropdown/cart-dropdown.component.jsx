import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items" >
            {
                cartItems.length 
                ? (cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                : (<span className="empty-cart">Your cart is empty</span>)
            }
        </div>
        <CustomButton onClick={() => {
            history.push("/checkout")
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));