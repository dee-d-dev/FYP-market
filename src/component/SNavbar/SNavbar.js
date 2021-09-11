import React from 'react'
import HomeCSS from "./snavbar.module.css";
import logo from '../../images/logo.png'
import cart from '../../images/icons/cart.png'



export default function SNavbar() {
    return (
        <>
            <div className={HomeCSS.header}>
                <div className={HomeCSS.brand}>
                <img src={logo} width="100px" alt="" />
                </div>

                <div className={HomeCSS.search_section}>
                <div>
                    <input type="text" />
                </div>
                <div className={HomeCSS.search_btn}>
                    <button>Search</button>
                </div>
                </div>

                <div className={HomeCSS.cart_icon}>
                <img src={cart} alt="" />
                <div className={HomeCSS.item_count}></div>
                </div>
            </div>
        </>
    )
}
