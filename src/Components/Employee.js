import React from "react";


const Employee= (props) =>{

return (<div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: '100vh'
    

}}>
   
    
    
    
                <div class="card w-50" style={{
                    height:'90%'
                }}>
                    <img alt={`The beautiful visage of ${props.data.name}`} src={props.data.photo} style={{
                        height:'55%'
                    }} />
                    <div class="card-body fs-3">
                        <h2>{props.data.name}</h2>
                        <p>
                            {props.data.role} in the {props.data.department} department since {props.data.startDate}. 
                        </p>
                        <p>
                            ID: {props.data.id}
                        </p>
                        
                    </div>
                    <button onClick={props.resetState} class="btn btn-outline-secondary btn-lg">Return</button>
              
                </div>
                <br/>
                
</div>)


}

export default Employee;