import React from "react";

const Categories = ({filterProducts}) =>{
    return <div className = "product-buttons">
            <div className= "btns">   <button className = "product-buttons btn" onClick = {()=> filterProducts('all')}>All products</button>
        <button className = "product-buttons btn" onClick = {()=> filterProducts('best seller')}>Bestsellers</button>
        </div> 
    </div>
}
export default Categories;