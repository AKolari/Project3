
import './App.css';
import Employee from './Components/Employee';
import Employees from './Components/Employees';
import Error from './Components/Error';
import Loading from './Components/Loading';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {

  const [loading, setLoading]= useState(true);



  const [employeesData, setEmployeesData] =useState([]);

  const [selectedEmployee, setSelectedEmployee]=useState(null);

  const[error, setError]=useState(false);

 

  function getEmployeesData(id=null){
    
    setLoading(true);
    
    let actualID='';
    if(!!id&&parseInt(id, 10)>0){
      actualID=parseInt(id, 10);
    }

    

    axios.get(`https://api.matgargano.com/employees/${actualID}`).then(response =>{
      setEmployeesData(response.data);
      console.log(response.data)
      setLoading(false);
    }, []).catch((error)=>{
      setError(error.message || "All Good");
    })
    
  }

  function resetState(){
    setEmployeesData([]);
    setSelectedEmployee(null);
    getEmployeesData();
    setError(false);

  }




useEffect(
  function(){
    getEmployeesData()
  },
  []
  )

useEffect(()=>{
  if(!!selectedEmployee){
    getEmployeesData(selectedEmployee);
  }
}, [selectedEmployee])


  return (
    
    <div className="App">
      {!!error &&<Error resetState={resetState} message={error}/>}
      {!error&&<div>


      {!!loading && <Loading/>}

      {!loading  && 
        <div>
           {!selectedEmployee&&<Employees setSelectedEmployee={setSelectedEmployee} data={employeesData}/>}
          



          {!!selectedEmployee&&<Employee data={employeesData} resetState={resetState}/>}




        </div>
      }
      </div>}






      {/*Listing of Books */}

      {/* Individual Book Listing */}

      {/* Loading State */}

      {/* Error State */}
    </div>
  );
}


