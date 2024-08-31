// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import "./StartProject.css";

// function StartProject() {
//   const [formData, setFormData] = useState({
//     name: "",
//     companyName: "",
//     email: "",
//     phoneNumber: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "service_19d2c03", // Replace with your EmailJS service ID
//         "template_kg14w3n", // Replace with your EmailJS template ID
//         formData,
//         "HtZugmgzaCmvjZhvS" // Replace with your EmailJS user ID
//       )
//       .then(
//         (result) => {
//           console.log("Email sent successfully:", result.text);
//            // Reset the form fields
//            setFormData({
//             name: "",
//             companyName: "",
//             email: "",
//             phoneNumber: "",
//             description: "",
//           });
//           // Show success message
//           toast.success("Message sent successfully!", {
//             position: "top-right", // Use position as a string
//             autoClose: 3000, // Duration the toast will stay on screen
//           });
//         },
//         (error) => {
//           console.error("There was an error sending the email:", error.text);
//         }
//       );
//   };
//   return (
//     <div className="project-container">
//     <h2 className="sectionTitle">WANT TO START A PROJECT</h2>
//     <form className="form-card" onSubmit={handleSubmit}>
//       <div className="form-row">
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           required
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="companyName"
//           placeholder="Company Name"
//           required
//           value={formData.companyName}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-row">
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           required
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <input
//           type="tel"
//           name="phoneNumber"
//           placeholder="Phone Number"
//           required
//           value={formData.phoneNumber}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-row">
//         <textarea
//           className="description-area"
//           name="description"
//           placeholder="Description"
//           required
//           value={formData.description}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Submit</button>
//       <p>
//         By submitting this form I give my consent for Iflexion to process my
//         personal data pursuant to Iflexion Privacy and Cookies Policy.
//       </p>
//       <ToastContainer />
//     </form>
//   </div>
//   );
// }

// export default StartProject;




import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./StartProject.css";

function StartProject() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Company Name: ${formData.companyName} <br> Phone Number: ${formData.phoneNumber} <br> Description: ${formData.description}`,
        }),
      });

      if (response.ok) {
        // Reset the form fields
        setFormData({
          name: "",
          companyName: "",
          email: "",
          phoneNumber: "",
          description: "",
        });

        // Show success message
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        toast.error("Failed to send message.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("There was an error sending the message:", error);
      toast.error("There was an error sending the message.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="project-container">
      <h2 className="sectionTitle">WANT TO START A PROJECT</h2>
      <form className="form-card" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            required
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <textarea
            className="description-area"
            name="description"
            placeholder="Description"
            required
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
        <p>
          By submitting this form I give my consent for Iflexion to process my
          personal data pursuant to Iflexion Privacy and Cookies Policy.
        </p>
        <ToastContainer />
      </form>
    </div>
  );
}

export default StartProject;

