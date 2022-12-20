import React from "react";
import "./Loading.css"


const Loading= () =>{

return (
<div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    height: '100vh'

}}>

<div className="lds-dual-ring"></div>
<h1>Loading...</h1>


</div>
)


}

export default Loading;