import React, { useState } from "react";
import { createAppointment } from "../../../axios/service/appointment";
import { sendContact } from "../../../telegrame/bot";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
function Appointment() {
  const [inputError, setInputError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });
  
  // const enabled = formData.length > 0;
  const [stuff, setStuff] = useState({
    loader: true,
    disabled: true,
    errorMessage: "",
    successMessage: "",
  });
  const { firstname, lastname, email, phone, date, time } = formData;
  const enabled = firstname.length > 0 && lastname.length > 0 && email.length > 0 && phone.length > 0 && date.length > 0 && time.length > 0 ;
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // if (e.target.value.length >= 5) {
    //   setStuff({
    //     disabled: false,
    //   });
    // } else {
    //   setStuff({
    //     disabled: true,
    //   });
    // }
    if (e.target.name === "email") {
      if (e.target.value.length <= 5) {
        setInputError({ ...inputError, email: "e-mail obligatoire!" });
      } else if (!e.target.value.includes("@")) {
        setInputError({
          ...inputError,
          email: "vous devez entrer votre email correct slt-p!!",
        });
      } else {
        setInputError({ ...inputError, email: "" });
      }
    } else if (e.target.name === "firstname") {
      if (e.target.value.length <= 2) {
        setInputError({ ...inputError, firstname: " nom obligatoire!" });
      } else {
        setInputError({ ...inputError, firstname: "" });
      }
    } else if (e.target.name === "lastname") {
      if (e.target.value.length <= 2) {
        setInputError({ ...inputError, lastname: "prénom  obligatoire!" });
      } else {
        setInputError({ ...inputError, lastname: "" });
      }
    } else if (e.target.name === "phone") {
      if (e.target.value.length <= 2) {
        setInputError({ ...inputError, phone: "télephone obligatoire!" });
      } else {
        setInputError({ ...inputError, phone: "" });
      }
    } else if (e.target.name === "date") {
      if (e.target.value.length <= 2) {
        setInputError({ ...inputError, date: "la date obligatoire!" });
      } else {
        setInputError({ ...inputError, date: "" });
      }
    } else if (e.target.name === "time") {
      if (e.target.value.length <= 2) {
        setInputError({ ...inputError, time: "le temps obligatoire!" });
      } else {
        setInputError({ ...inputError, time: "" });
      }
    }
  };
  const handleSubmitContact = (e) => {
    e.preventDefault();
    setStuff({ ...stuff, loader: true });
    for (const input in inputError) {
      if (inputError[input] !== "") {
        toast.error("error");
        return;
      }
    }
    //  const newDate = new Date(date).getTimezoneOffset() + (1000 * 60 * 60)
    const newData = {
      ...formData,
      date: new Date(
        new Date(date).setHours(
          new Date(date).getHours() + parseInt(time.substr(0, 2))
        )
      ),
    };
    setStuff({
      loader: false,
      successMessage: "Rndez-vous d'opération réussie.",
      errorMessage: "",
    });
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      date: "",
      time: "",
    });
    createAppointment(newData)
      .then(({ data }) => {
        if (!data.err) {
          toast.success("message succes")
          const message = `new contact \n
          firstname : ${newData.firstname} \n
          lastname : ${newData.lastname} \n
          email : ${newData.email} \n 
          phone : ${newData.phone} \n
          date : ${newData.date}`;
          sendContact(message);
         
        } else {
          console.log(data.msg);
          setStuff({
            loader: false,
            successMessage: "",
            errorMessage: data.msg[0],
          });
          toast.error("message no succes")
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Une erreur Veuillez réessayer");
      });
  };
  // const isEmpty = () => {
  //   let firstname = document.getElementById("firstname").value;
  //   let lastname = document.getElementById("lastname").value;
  //   let email = document.getElementById("email").value;
  //   let phone = document.getElementById("phone").value;
  //   let date = document.getElementById("date").value;
  //   let time = document.getElementById("time").value;
  //   if (
  //     firstname === "" &&
  //     lastname === "" &&
  //     email === "" &&
  //     phone === "" &&
  //     date === "" &&
  //     time === ""
  //   ) {
  //     document.getElementById("btnEnvoyez").removeAttribute("disabled");
  //   }
  // };
  return (
    <>
      <section
        className="about"
        id="about"
        style={{ backgroundImage: `url(./img/arabesque-left-bottom.svg)` }}
      >
        <div className="container">
          <div className="section-title">
            <h1>Prenez-rendez-vous</h1>
          </div>
          <div>
      </div>
          <div className="about-detail">
            <div className="">
              <div className="borderContact">
                <div className="about-img">
                  <img src="/img/coif.jpg" alt="" />
                </div>
                <div className="col-md-12">
                  <form
                    onSubmit={handleSubmitContact}
                    className="react-email-form"
                  >
                    <div className="row mt-3">
                      <div className="col-md-12 form-group pt-3 mt-md-0">
                        <input
                          type="text"
                          name="firstname"
                          className="form-control"
                          id="firstname"
                          placeholder="Nom *"
                          value={firstname}
                          onChange={(e) => handleInputChange(e)}
                          // onKeyUp={() => isEmpty()}
                        />
                        {inputError.firstname !== "" && (
                          <div className="error">{inputError.firstname}</div>
                        )}
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-md-12 form-group mt-3 mt-md-0">
                        <input
                          type="text"
                          name="lastname"
                          className="form-control"
                          id="lastname"
                          placeholder="Prénom *"
                          value={lastname}
                          onChange={(e) => handleInputChange(e)}
                          // onKeyUp={() => isEmpty()}
                        />
                        {inputError.lastname !== "" && (
                          <div className="error">{inputError.lastname}</div>
                        )}
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12 form-group mt-3 mt-md-0">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="E-mail *"
                          value={email}
                          onChange={(e) => handleInputChange(e)}
                          // onKeyUp={() => isEmpty()}
                        />
                        {inputError.email !== "" && (
                          <div className="error">{inputError.email}</div>
                        )}
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12 form-group mt-3 mt-md-0">
                        <input
                          type="number"
                          className="form-control"
                          name="phone"
                          id="phone"
                          placeholder="Télephone *"
                          value={phone}
                          onChange={(e) => handleInputChange(e)}
                          // onKeyUp={() => isEmpty()}
                        />
                        {inputError.phone !== "" && (
                          <div className="error">{inputError.phone}</div>
                        )}
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12 form-group mt-3 mt-md-0">
                        <input
                          type="date"
                          className="form-control"
                          name="date"
                          id="date"
                          // placeholder="E-mail *"
                          value={date}
                          onChange={(e) => handleInputChange(e)}
                          // min="2022-05-20"
                          // max="2022-06-20"
                          // onKeyUp={() => isEmpty()}
                        />
                        {inputError.date !== "" && (
                          <div className="error">{inputError.date}</div>
                        )}
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12 form-group mt-3 mt-md-0">
                        <select
                          className="form-select lg"
                          aria-label="Default select example"
                          name="time"
                          id="time"
                          value={time}
                          onChange={(e) => handleInputChange(e)}
                          // onKeyUp={() => isEmpty()}
                        >
                          <option selected="">
                            Le temps de render-vous *
                          </option>
                          <option value="9:00">9:00</option>
                          <option value="10:00">10:00</option>
                          <option value="11:00">11:00</option>
                          <option value="12:00">12:00</option>
                          <option value="13:00">13:00</option>
                          <option value="14:00">14:00</option>
                          <option value="15:00">15:00</option>
                          <option value="16:00">16:00</option>
                          <option value="17:00">17:00</option>
                          <option value="18:00">18:00</option>
                          <option value="19:00">19:00</option>
                          <option value="20:00">20:00</option>
                          <option value="21:00">21:00</option>
                          <option value="22:00">22:00</option>
                        </select>
                      </div>
                      {inputError.time !== "" && (
                        <div className="error">{inputError.time}</div>
                      )}
                    </div>
                    <button
                      id="btnEnvoyez"
                      type="submit"
                      style={{ marginBottom: "20px", marginTop: "20px" }}
                      className="btn"
                      // disabled={disabled} onClick={setDisabled}
                      disabled={!enabled}
                    >
                      Envoyer
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Appointment;
