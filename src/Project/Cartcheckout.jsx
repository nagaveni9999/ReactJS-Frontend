
  

import React, { useState } from "react";

const ValidationCheck = () => {
 const [data, setData] = useState({
    phone: "",
    address: "",
    landmark: "",
    pincode: "",
    state: "",
    Conformemail: "",
 });

 const [errors, setErrors] = useState({});

 const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
 };

 const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!data.phone) {
      isValid = false;
      newErrors.phone = "Phone number is required.";
    }

    if (!data.address) {
      isValid = false;
      newErrors.address = "Address is required.";
    }

    if (!data.landmark) {
      isValid = false;
      newErrors.landmark = "landmark is required.";
    }

    if (!data.pincode) {
      isValid = false;
      newErrors.pincode = "Pincode is required.";
    }

    if (!data.state) {
      isValid = false;
      newErrors.state = "State is required.";
    }

    if (!data.Conformemail) {
      isValid = false;
      newErrors.Conformemail = "Email is required.";
    }

    setErrors(newErrors);
    return isValid;
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted");
      alert('Form submitted successfully');
    }
 };

 return (
    <form onSubmit={handleSubmit}>
      
        <div class="container-fluid mt-9"  >
            <div class="row mx-auto mt-5" style={{background:'url("data:image/jpeg;base64,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")'}}>
                
                <div class="mx-auto col-md-6 mt-5 pt-4"  style={{background:'url("data:image/jpeg;base64,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")'}}>
                    <div class="card mb-5 p-2  shadow rounded">
                        <div class="card-body mt-2">
                            <div class="row mb-3">
                                
                                <h3 class="text-success text-center border-bottom border-primary p-3" style={{fontFamily:'poppins',backgroundColor:'lightblue'}} >Cartcheckout</h3>
                            </div>
      <div className="row mx-auto mt-5" style={{backgroundImage:'url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRUVFRgVFRUVFRcaFxUVFRUYHSggGB0lHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NFQ8PFSsZFRktLS0tLS0rKysrLS0tKysrLS0tNy0rLS0tNy0tKy0tNzc3LTc3Ny0tLTc3Nzc3NzctLf/AABEIALcBEwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAAIHA//EABgQAQEBAQEAAAAAAAAAAAAAAAABEQIS/8QAGAEBAQEBAQAAAAAAAAAAAAAAAQACBQT/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AOmYZEXvc1YcSBMaEIKOIgiHFhiKiwqBYsUhMBGFVYiqyViAGFJBY1gKGIhAM1sUgYK1gxJnBWsFIGM2N1kwVnFjQIxnE0CsUKaBUUKjJMOKEFEYUUYMOBIxYZAVixIFVQ1RIYrCkmZFjSxamVYUQzYrGrFiTIrSKZFaFhDIawICixpmlM1YaSywiiCYDIGjIsRBUKhBBikMgSpxEFVFAiFSNJBGqAoFJMo4igGhUBQ0sSZDQIArQpTNDQsLIBo6KZoNFLIQRDZiLLRhDQIaBBDWAoojDAjFFFAScBBSxYklUUiyjUgIlatSGrSKQKCimVUtQAIrQFZrdZxBmwWNUNAJaiGsI1VktEEE4RCCtOg6CZTKIQShhgJUUMqQUK1EFLUhUrUgMRCQVqBCBBSFIqAVLNIVGFmkAGghJaiFhlGmKlqEFknSCDFDEQUQQSkgSpUokYqlUSKYqEykiECEkKQQEqEkMaZpAwU2qkDQhSBQg0CgkCQoi1pGrWS00zDEY1EKoC0WTAWlBpCRgUBaVGnUVqq0WpaqEqgktGlFk6EEgikKrQgrArQ0yhaYzUgy0y0ytQqIaLPoyotQiVayWpWpWI0DGlohgaK1YgmtVGKIkwHQipWdWpNBLQQlUQKtSSQ1KkIKhI0IaQqFRpCFVBACrOtRmnUNRGmGCUgtFmUgtRpnToaJZtITWoRaC3FKzKQTatFoiTYSRNCCRQWoEahqSlQ1WlGgUIGhaNIQ1AhWilkwUUNVnSKxSbSQzK0zGok1IlIcBMrTFMDTWnWdOgtatGrQtaLMUR0qUGVIyrQgWqNFSBTMNiS1IJIEaQhiCRkGrBhBtZtVFIVQ1aQqBqIKZ1JBrWJWoQ1K1rEIL0lAMZaKWLEmgkCo1oMqKhEp0JRLRqRUo06ktQ1akrULUkUAkdGhUhVCwEKhVEIVC0gBC0glhIatMqRUrUplSZaOmdJJHSkGjqlSBMRQS1akkrVqSRFSBGrSiAqkktSSQGhGCqi1IirQkgBSimRqRCSSD//Z")'}} >
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={data.phone}
            className="form-control"
            onChange={handleInputChange}
          />
          {errors.phone && <span className="text-danger">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={data.address}
            className="form-control"
            onChange={handleInputChange}
          />
          {errors.address && <span className="text-danger">{errors.address}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="landmark">Landmark</label>
          <input
            type="text"
            name="landmark"
            value={data.landmark}
            className="form-control"
            onChange={handleInputChange}
          />
          {errors.landmark && <span className="text-danger">{errors.landmark}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode</label>
          <input
            type="text"
            name="pincode"
            value={data.pincode}
            className="form-control"
            onChange={handleInputChange}
          />
          {errors.pincode && <span className="text-danger">{errors.pincode}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            value={data.state}
            className="form-control"
            onChange={handleInputChange}
          />
          {errors.state && <span className="text-danger">{errors.state}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email"> Confirm Email ID</label>
          
          <input
            type="email"
            
            name="Conformemail"
            value={data.Conformemail}
            className="form-control" 
            
            onChange={handleInputChange}
            
          />
          {errors.Conformemail && <span className="text-danger">{errors.Conformemail}</span>}
        </div>
      </div>

      <div className="row mx-auto mt-5  ">
        <div className="col">
        <a href="/successful" className="btn text-decoration-center btn-success fw-bold mx-5">
                Placeorder
              </a>
               <a href="/cart" className="btn text-decoration-none btn-danger fw-bold mx-5  ">
                 Cancel
              </a>
          <button type="submit" className="btn text-decoration-none btn-success fw-bold mx-5">
            Submit
          </button>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </form>
 );
};

export default ValidationCheck;