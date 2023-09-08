import "../../styles/app/components/Loading.css"
import React from "react";
import loading from "../../assets/img/app/loading.png";



const Loading:React.FC<{style?:React.CSSProperties, className?:string}> = ({ style, className}) => {
    return (
        <img src={loading} alt="loading..." style={style} className={`loading ${className?className:""}`} />
    )
}

export default Loading;