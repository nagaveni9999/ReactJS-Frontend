// import React from "react";

// function GarmentList({ garments, onRemove }) {
//   return (
//     <div>
//       <h3>Products Page</h3>
//       <ul>
//         {garments.map((garment,name) => (
//           <li key={name}>
//             {garment.name} - {garment.unitPrice} - {garment.quantity} -{" "}
//             {garment.status}
//             <button onClick={() => onRemove(garment.name)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default GarmentList;
import React, { useState, useEffect } from "react";



function GarmentList({ garments, onRemove }) {
 const [storedGarments, setStoredGarments] = useState([]);
 

 useEffect(() => {
    setStoredGarments(garments);
 }, [garments]);

 const removeItem = (name) => {
    const updatedGarments = storedGarments.filter(
      (garment) => garment.name !== name
    );
    setStoredGarments(updatedGarments);
    localStorage.setItem("garments", JSON.stringify(updatedGarments));
 };

 return (
    <div>
      <h3>Products Page</h3>
 <ul>
        {storedGarments.map((garment) => (
          <li key={garment.name} style={{ fontFamily: "bold",fontSize:"19px" }}>
            {garment.name} - {garment.unitPrice} - {garment.quantity} -{" "}
            {garment.status}
            <button onClick={() => removeItem(garment.name)} className="btn btn-primary">Remove</button>
           
            
             
          </li>
        ))}
      </ul> 
      
    </div>
 );
}

export default GarmentList;
