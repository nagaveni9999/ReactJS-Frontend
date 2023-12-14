import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Header from "../Routing/Header";

export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errorMessage, setErrorMessage] = useState("");
const [message, setMessage] = useState('');
const navigate = useNavigate();
const handleSubmit = (event) => {
  event.preventDefault();
  // Perform sign-in logic here
  setMessage('Signin Successful!');
};  

useEffect(() => {
if (localStorage.getItem("user-info")) {
navigate("/Login");


}
}, []);

async function login() {
if (email === "" || password === "") {
setErrorMessage("Please enter both email and password");
return;
}
try {
    const response = await axios.post(
      "https://localhost:44340/api/Account/Login",
      {
        email,
        password,
      }
    );
  
    localStorage.setItem("user-info", JSON.stringify(response.data));
    navigate("/Garments");
  } catch (error) {
    setErrorMessage("Invalid email or password");
  }
  }
  
  return (
    <div>
      
       <div className="container mt-5"style={{fontFamily:'poppins'}}>
      <div className="row mx-auto mt-5" style={{backgroundImage:'url("data:image/jpeg;base64,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")', backgroundSize: 'cover', backgroundPosition: 'center',height:'750px'}}>
          <div className="mx-auto col-md-6 mt-5 pt-4">
            
             <div className="card mb-5 p-2 shadow rounded">
               <div className="card-body mt-2">
                <div className="row mb-3">
                   <h3 className="text-success text-center border-bottom border-primary p-4">
                     LOGIN FORM
                   </h3>
{/* //                 </div> */}
  <div className="col-sm-6 offset-sm-3">
  {/* <Header/> */}
  
  <div>
  <input
  type="email"
  placeholder="email"
  onChange={(e) => setEmail(e.target.value)}
  className="form-control"
  />
  <br />
  <input
  type="password"
  placeholder="password"
  onChange={(e) => setPassword(e.target.value)}
  className="form-control"
  />
  <br />
  <button onClick={login} className="btn btn-primary">
  Login
  </button>
  {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
  </div>
  </div>
  </div>
              <div class="row mt-3">
                            
                             <div class="col-sm-3"></div>
                              <div class="col-sm-3"></div>
                              <div class="col-sm-3"></div>
                             <div class="col-sm-3"><a href="/register" class="text-decoration-none mb-3 text-primary fw-bold ">New User?</a></div>
                            
                        </div>
                        <form onSubmit={handleSubmit}>
     
    </form>
    {message && <p>{message}</p>}
              
              
          
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
  }