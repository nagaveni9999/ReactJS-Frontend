import React,{useState} from "react";

import jsPDF from "jspdf";

export default function Successful()
{
    const [orderTime] = useState(new Date()); // Store order placement time
    const [arrivalTime] = useState(new Date()); // Store arrival time
    const [departureTime] = useState(new Date()); // Store departure time
    ;
    
    const cartItems = [
        { name: "solid shirt", 
        price: 2000,
        quantity: 1,
        Address:"Madanapalli",
        Phonenumber:9492857535},

      ];

    const formattedOrderTime = orderTime.toLocaleString();
    const currentDate = new Date();

    // Add five days to the current date
    currentDate.setDate(currentDate.getDate() + 6);
    
  
    const formattedArrivalTime = currentDate.toLocaleDateString();
  
  const currentDate2 = new Date();

   
    currentDate2.setDate(currentDate.getDate() -5 );

  const formattedDepartureTime = currentDate2.toLocaleString();



  
  
  const user= localStorage.getItem("user-info")
  console.log(user)
  const sendEmail = async () => {
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_5941e54',
          template_id: 'template_szijpm9',
          user_id: '8EcEqn032dOp-aVNU',
          template_params: {
            to_email: "bommisettyveni@gmail.com",
            subject: "Order confirmation from Raavish.",
            message: "Hello Thankyou for shopping with Raavish Your order has been conformed and your order will reach you in 5 Bussiness days",  
            'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...',
          },
        }),
      });

      if (response.ok) {
        // setStatus('success');
        alert("email sent successfully");
      } else {
        const errorData = await response.json();
        // setStatus('error');
        alert("Email sending failed: " + JSON.stringify(errorData))
        console.error(errorData);
      }
    } catch (error) {
      // setStatus('error');
      console.error(error);
    }
  };


  const generatePDF = () => {
    const pdf = new jsPDF(); 

    // Add content to the PDF
    pdf.text("Order Confirmation", 10, 10);
    pdf.text(`Order Placed Time: ${formattedOrderTime}`, 10, 20);
    pdf.text(`Arrival Time: ${formattedArrivalTime}`, 10, 30);
    pdf.text(`Departure Time: ${formattedDepartureTime}`, 10, 40);
    

    pdf.text("Cart Checkout Details", 10, 60);
    let yPosition = 70; 
    cartItems.forEach((item) => {
      pdf.text(`${item.name} - Price: ${item.price}, Quantity: ${item.quantity}`, 10, yPosition);
      yPosition += 10;
    });  
   


// Thank you message
pdf.text("Thank you for shopping with Raavish.", 10, yPosition + 20);
    // Save the PDF with a specific name
    pdf.save("order_confirmation.pdf");
  };
    return(
        <div class=" mt-5 pt-5"style={{color:'#282828'}}>
        <h2>Your order Placed Successfully</h2>
        <img style={{width: "1650px",height:"400px"}} src="https://www.zuplic.com/wp-content/uploads/2018/07/eCommerce-Animated-GIF.gif"  alt="Success"></img>
{/*         
      <p>Order Placed Time: {formattedOrderTime}</p>
      <p>Arrival Time: {formattedArrivalTime}</p>
      <p>Departure Time: {formattedDepartureTime}</p> */}
       <table>
        <tbody class=" fw-bold">
          <tr>
            <th>Event</th>
            <th>Time</th>
          </tr>
          <tr class=" fw-bold ">
            <td>Order Placed Time</td>
            <td>{formattedOrderTime}</td>
          </tr>
          <tr>
            <td> Arrival Time</td>
            <td>{formattedArrivalTime}</td>
          </tr>
          <tr>
            <td>Departure Time</td>
            <td>{formattedDepartureTime}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={sendEmail} class="btn text-decoration-none btn-success fw-bold mx-5">Order Confirmation</button>
      <button onClick={generatePDF} class="btn text-decoration-none btn-primary fw-bold mx-5">
        Generate PDF Bill
      </button>
        </div>

    )
}