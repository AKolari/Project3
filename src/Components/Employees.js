import React from "react";



const Employees= (props) =>{

    function updateEmployee(employeID){
        props.setSelectedEmployee(employeID);
       // console.log(employeID)


    }

return (
<div class="container-fluid d-flex justify-content-center align-items-center">
    
    <div class="row d-flex justify-content-center align-items-center ">
        <div class="container-fluid d-flex justify-content-center align-items-end w-100" style={{
             backgroundImage: "url(https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8)",
             minHeight: "65vh",
             backgroundRepeat: "no-repeat",
             backgroundPosition: "center",
             backgroundSize: "cover",
             
        }}>
        
            <div class="bg-dark text-center text-white p-1 heading-2 w-100">
                <h1 class="text-center">Our Crew:</h1>
           
            </div>
      
        </div>
        {props.data.map(employee => {
            return (
       
                    <div class="col-12 col-md-4 h-100 ">
                        <div class="card h-100 my-2">
                           
                           <h2><b>{employee.name}</b></h2>
                           <h4><i>{employee.department}</i></h4>
                           <h6>ID: {employee.id}</h6>
                           <button onClick={function(){updateEmployee(employee.id)}} class="btn btn-outline-secondary btn-lg">Learn More</button>
                           </div>
                           
             
                         </div>
                               
                            
                     

            );
        })}
           
    </div>
    

</div>
)


}

export default Employees;