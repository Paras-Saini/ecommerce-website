// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";

// const AddCardDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const user = JSON.parse(sessionStorage.getItem("active-customer"));
//   const priceToPay = location.state.priceToPay;
//   const customer_jwtToken = sessionStorage.getItem("customer-jwtToken");

//   const [card, setCard] = useState({
//     cardName: "",
//     cardNumber: "",
//     validThrough: "",
//     cvv: "",
//   });

//   const handleCardInput = (e) => {
//     setCard({ ...card, [e.target.name]: e.target.value });
//   };

//   const payForOrder = (e) => {
//     e.preventDefault();
//     fetch("http://localhost:8080/api/order/add?userId=" + user.id, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + customer_jwtToken,
//       },
//     })
//       .then((result) => {
//         result.json().then((res) => {
//           if (res.success) {
//             toast.success(res.responseMessage, {
//               position: "top-center",
//               autoClose: 1000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//             });

//             setTimeout(() => {
//               navigate("/home");
//             }, 2000); // Redirect after 3 seconds
//           } else if (!res.success) {
//             toast.error(res.responseMessage, {
//               position: "top-center",
//               autoClose: 1000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//             });
//             setTimeout(() => {
//               window.location.reload(true);
//             }, 2000); // Redirect after 3 seconds
//           } else {
//             toast.error("It Seems Server is down!!!", {
//               position: "top-center",
//               autoClose: 1000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//             });
//             setTimeout(() => {
//               window.location.reload(true);
//             }, 2000); // Redirect after 3 seconds
//           }
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//         toast.error("It seems server is down", {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//         setTimeout(() => {
//           window.location.reload(true);
//         }, 1000); // Redirect after 3 seconds
//       });
//   };

//   return (
//     <div>
//       <div class="mt-2 d-flex aligns-items-center justify-content-center">
//         <div class="card form-card border-color" style={{ width: "25rem" }}>
//           <div className="card-header bg-color custom-bg-text">
//             <h5 class="card-title text-center">Payment Details</h5>
//           </div>
//           <div class="card-body text-color custom-bg">
//             <form onSubmit={payForOrder}>
//               <div class="mb-3">
//                 {/* <label for="name" class="form-label">
//                   <b> Name on Card</b>
//                 </label> */}
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="name"
//                   name="cardName"
//                   placeholder="Name on Card"
//                   onChange={handleCardInput}
//                   value={card.cardName}
//                   required
//                 />
//               </div>
//               <div class="mb-3">
//                 {/* <label for="cardNumber" class="form-label">
//                   <b> Card Number</b>
//                 </label> */}
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="cardNumber"
//                   name="cardNumber"
//                   placeholder="Card Number"
//                   onChange={handleCardInput}
//                   value={card.cardNumber}
//                   required
//                 />
//               </div>

//               <div class="mb-3">
//                 {/* <label for="validThrough" class="form-label">
//                   <b>Valid Through</b>
//                 </label> */}
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="validThrough"
//                   name="validThrough"
//                   placeholder="Valid Through"
//                   onChange={handleCardInput}
//                   value={card.validThrough}
//                   required
//                 />
//               </div>

//               <div class="mb-3">
//                 {/* <label for="cvv" class="form-label">
//                   <b>CVV</b>
//                 </label> */}
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="cvv"
//                   name="cvv"
//                   placeholder="CVV"
//                   onChange={handleCardInput}
//                   value={card.cvv}
//                   required
//                 />
//               </div>

//               <input
//                 type="submit"
//                 class="btn custom-bg-text bg-color"
//                 value={"Pay Rs " + priceToPay}
//               />

//               <ToastContainer />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCardDetails;

// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";

// const AddCardDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const user = JSON.parse(sessionStorage.getItem("active-customer"));
//   const priceToPay = location.state.priceToPay;
//   const customer_jwtToken = sessionStorage.getItem("customer-jwtToken");

//   const [card, setCard] = useState({
//     cardName: "",
//     cardNumber: "",
//     validThrough: "",
//     cvv: "",
//   });

//   const handleCardInput = (e) => {
//     setCard({ ...card, [e.target.name]: e.target.value });
//   };

//   const payForOrder = (e) => {
//     e.preventDefault();
//     fetch("http://localhost:8080/api/order/add?userId=" + user.id, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + customer_jwtToken,
//       },
//     })
//       .then((result) => {
//         result.json().then((res) => {
//           if (res.success) {
//             toast.success(res.responseMessage, {
//               position: "top-center",
//               autoClose: 1000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//             });

//             setTimeout(() => {
//               navigate("/home");
//             }, 2000); // Redirect after 3 seconds
//           } else if (!res.success) {
//             toast.error(res.responseMessage, {
//               position: "top-center",
//               autoClose: 1000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//             });
//             setTimeout(() => {
//               window.location.reload(true);
//             }, 2000); // Redirect after 3 seconds
//           } else {
//             toast.error("It Seems Server is down!!!", {
//               position: "top-center",
//               autoClose: 1000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//             });
//             setTimeout(() => {
//               window.location.reload(true);
//             }, 2000); // Redirect after 3 seconds
//           }
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//         toast.error("It seems server is down", {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//         setTimeout(() => {
//           window.location.reload(true);
//         }, 1000); // Redirect after 3 seconds
//       });
//   };

//   return (
//     <div>
//       <div class="mt-2 d-flex aligns-items-center justify-content-center">
//         <div class="card form-card border-color" style={{ width: "25rem" }}>
//           <div className="card-header bg-color custom-bg-text">
//             <h5 class="card-title text-center">Payment Details</h5>
//           </div>
//           <div class="card-body text-color custom-bg">
//             <form onSubmit={payForOrder}>
//               <div class="mb-3">
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="name"
//                   name="cardName"
//                   placeholder="Name on Card"
//                   onChange={handleCardInput}
//                   value={card.cardName}
//                   required
//                 />
//               </div>
//               <div class="mb-3">
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="cardNumber"
//                   name="cardNumber"
//                   placeholder="Card Number"
//                   onChange={handleCardInput}
//                   value={card.cardNumber}
//                   required
//                 />
//               </div>

//               <div class="mb-3">
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="validThrough"
//                   name="validThrough"
//                   placeholder="Valid Through"
//                   onChange={handleCardInput}
//                   value={card.validThrough}
//                   required
//                 />
//               </div>

//               <div class="mb-3">
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="cvv"
//                   name="cvv"
//                   placeholder="CVV"
//                   onChange={handleCardInput}
//                   value={card.cvv}
//                   required
//                 />
//               </div>

//               <input
//                 type="submit"
//                 class="btn custom-bg-text bg-color"

//                 style={{ backgroundColor: "#0c5177", color: "#fff" }}
//                 value={"Pay Rs " + priceToPay}
//               />

//               <ToastContainer />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCardDetails;

// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";

// const AddCardDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const user = JSON.parse(sessionStorage.getItem("active-customer"));
//   const priceToPay = location.state.priceToPay;
//   const customer_jwtToken = sessionStorage.getItem("customer-jwtToken");

//   const [card, setCard] = useState({
//     cardName: "",
//     cardNumber: "",
//     validThrough: "",
//     cvv: "",
//   });

//   const handleCardInput = (e) => {
//     setCard({ ...card, [e.target.name]: e.target.value });
//   };

//   const payForOrder = (e) => {
//     e.preventDefault();
//     fetch("http://localhost:8080/api/order/add?userId=" + user.id, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + customer_jwtToken,
//       },
//     })
//       .then((result) => {
//         result.json().then((res) => {
//           if (res.success) {
//             toast.success(res.responseMessage, {
//               position: "top-center",
//               autoClose: 1000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//             });

//             setTimeout(() => {
//               navigate("/home");
//             }, 2000); // Redirect after 3 seconds
//           } else if (!res.success) {
//             toast.error(res.responseMessage, {
//               position: "top-center",
//               autoClose: 1000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//             });
//             setTimeout(() => {
//               window.location.reload(true);
//             }, 2000); // Redirect after 3 seconds
//           } else {
//             toast.error("It Seems Server is down!!!", {
//               position: "top-center",
//               autoClose: 1000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//             });
//             setTimeout(() => {
//               window.location.reload(true);
//             }, 2000); // Redirect after 3 seconds
//           }
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//         toast.error("It seems server is down", {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//         setTimeout(() => {
//           window.location.reload(true);
//         }, 1000); // Redirect after 3 seconds
//       });
//   };

//   return (
//     <div className="mt-2 d-flex aligns-items-center justify-content-center">
//       <div className="card form-card border-color" style={{ width: "25rem" }}>
//         <div className="card-header bg-color custom-bg-text">
//           <h1 className="card-title text-center">Payment Details</h1>
//         </div>
//         <div className="card-body text-color custom-bg">
//           <form onSubmit={payForOrder}>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="cardName"
//                 placeholder="Name on Card"
//                 onChange={handleCardInput}
//                 value={card.cardName}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 id="cardNumber"
//                 name="cardNumber"
//                 placeholder="Card Number"
//                 onChange={handleCardInput}
//                 value={card.cardNumber}
//                 required
//               />
//             </div>
//             <div className="row mb-3">
//               <div className="col">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="validThrough"
//                   name="validThrough"
//                   placeholder="Valid Through"
//                   onChange={handleCardInput}
//                   value={card.validThrough}
//                   required
//                 />
//               </div>
//               <div className="col">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="cvv"
//                   name="cvv"
//                   placeholder="CVV"
//                   onChange={handleCardInput}
//                   value={card.cvv}
//                   required
//                 />
//               </div>
//             </div>
//             <input
//               type="submit"
//               className="btn custom-bg-text bg-color"
//               style={{ backgroundColor: "#0806d8", color: "#fff" }}
//               value={"Pay Rs " + priceToPay}
//             />
//             <ToastContainer />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCardDetails;

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AddCardDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("active-customer"));
  const priceToPay = location.state.priceToPay;
  const customer_jwtToken = sessionStorage.getItem("customer-jwtToken");

  const [card, setCard] = useState({
    cardName: "",
    cardNumber: "",
    validThrough: "",
    cvv: "",
  });

  const handleCardInput = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const payForOrder = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/order/add?userId=" + user.id, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + customer_jwtToken,
      },
    })
      .then((result) => {
        result.json().then((res) => {
          if (res.success) {
            toast.success(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            setTimeout(() => {
              navigate("/home");
            }, 2000); // Redirect after 3 seconds
          } else if (!res.success) {
            toast.error(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
              window.location.reload(true);
            }, 2000); // Redirect after 3 seconds
          } else {
            toast.error("It Seems Server is down!!!", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
              window.location.reload(true);
            }, 2000); // Redirect after 3 seconds
          }
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("It seems server is down", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          window.location.reload(true);
        }, 1000); // Redirect after 3 seconds
      });
  };

  return (
    <div className="mt-2 d-flex align-items-center justify-content-center">
      <div className="card form-card border-color" style={{ width: "25rem" }}>
        <div className="card-header bg-color custom-bg-text">
          <h5 className="card-title text-center">Payment Details</h5>
        </div>
        <div className="card-body text-color custom-bg">
          <form onSubmit={payForOrder}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                name="cardName"
                placeholder="Name on Card"
                onChange={handleCardInput}
                value={card.cardName}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                name="cardNumber"
                placeholder="Card Number"
                onChange={handleCardInput}
                value={card.cardNumber}
                required
              />
            </div>
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="validThrough"
                  name="validThrough"
                  placeholder="Valid Through"
                  onChange={handleCardInput}
                  value={card.validThrough}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="cvv"
                  name="cvv"
                  placeholder="CVV"
                  onChange={handleCardInput}
                  value={card.cvv}
                  required
                />
              </div>
            </div>
            <input
              type="submit"
              className="btn custom-bg-text bg-color"
              style={{ backgroundColor: "#0c5177", color: "#fff" }}
              value={"Pay Rs " + priceToPay}
            />
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCardDetails;
