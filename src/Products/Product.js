import React from "react";

export default function Product(props){
    return(
        <div className = "product-container">
            <img src = {props.image}/>
            <div className = "product-id">{props.bestseller}</div>
            <div className = "product-name">{props.name}</div>
            <div className = "product-price">${props.price}</div>
        </div>
    )
}