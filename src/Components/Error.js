import React from "react";


const Error= (props) =>{

return <div>{props.message} <button onClick={props.resetState}>Try Again?</button></div>


}

export default Error;