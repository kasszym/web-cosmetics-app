import { useNavigate } from "react-router-dom";


export default function News(){
    let navigate = useNavigate()
    return(
        <div className = "image-grid">
            <div onClick = {() => navigate("/news")} className = "grid-item item-1"><img src = "https://res.cloudinary.com/dyjyqvuox/image/upload/v1653314135/6_eydz3l.png"/></div>
            <div onClick = {() => navigate("/news")}  className = "grid-item item-2"> <img src = "https://res.cloudinary.com/dyjyqvuox/image/upload/v1653314135/3_wuwf1a.png"/></div>
            <div onClick = {() => navigate("/news")}  className = "grid-item item-3"><img src = "https://res.cloudinary.com/dyjyqvuox/image/upload/v1653314135/1_yavdgw.png"/></div>
            <div onClick = {() => navigate("/news")}  className = "grid-item item-4"> <img src = "https://res.cloudinary.com/dyjyqvuox/image/upload/v1653314135/5_oth42y.png"/></div>
            <div onClick = {() => navigate("/news")}  className = "grid-item item-5"> <img src = "https://res.cloudinary.com/dyjyqvuox/image/upload/v1653314135/4_fx1clp.png"/></div>
            <div onClick = {() => navigate("/news")}  className = "grid-item item-6"><img src = "https://res.cloudinary.com/dyjyqvuox/image/upload/v1653314135/2_wocuo5.png"/></div>
        
        </div>
    )
}