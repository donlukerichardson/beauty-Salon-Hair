import React, { useEffect, useState } from "react";
import {
  createAppointment,
  getTimes,
} from "../../../axios/service/appointment";
import { sendContact } from "../../../telegrame/bot";
import moment from "moment";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { alpha } from "@material-ui/core/styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { CloseButton } from "react-toastify/dist/components";

// import 'react-datetime/css/react-datetime.css';
toast.configure();
function Appointment() {
  const [myDate, setMyDate] = useState(moment().subtract(-1, "days"));
  const [time, setTime] = useState("");
  const [arrTime, setArrTime] = useState([]);
  const [loader, setLoader] = useState(false);

  const [inputError, setInputError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const { firstname, lastname, email, phone } = formData;
  const enabled =
    firstname.length > 0 &&
    lastname.length > 0 &&
    email.length > 0 &&
    phone.length > 0;

  // Disable past dates :
  const disablePastDate = () => {
    return moment().subtract(-1, "days");
  };

  // Handel change date :
  const handeldatechange = (date) => {
    getTimes({
      filter: JSON.stringify({ date: moment(date).format("YYYY-MM-DD") }),
    })
      .then(({ data }) => {
        if (!data.err) {
          setArrTime(data.msg);
        } else {
          const error = typeof data.msg === "string" ? data.msg : data.msg[0];
        }
      })
      .catch((err) => {
        toast.error("Une erreur");
      });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

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
    }
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();

    for (const input in inputError) {
      if (inputError[input] !== "") {
        toast.error("error");
        return;
      }
    }

    //const newDate = new Date(date).getTimezoneOffset() + (1000 * 60 * 60)
    const newData = {
      ...formData,
      date: moment(myDate).format("YYYY-MM-DD"),
      // date: moment(myDate,"YYYY-MM-DD"),
      time: time,
    };

    if (time === " ") {
      toast.error("error");
    }

    setLoader(true);
    createAppointment(newData)
      .then(({ data }) => {
        if (!data.err) {
          toast.success("message succes");
          // window.location.reload();
          document.getElementById("datePicker").click();
          document.getElementById("myModal").click();
          const message = `Bonjour Lamassati Il ya un rendez-vous avec <b>${
            newData?.firstname
          } ${newData?.lastname} 😁 </b>\n<b>❄ Date:</b> ${moment(
            newData?.date
          ).format("DD/MM/YYYY")}\n<b>❄ Hours:</b> ${
            newData?.time
          }\n<b>❄ Email:</b> ${newData.email}\n<b>❄ Phone:</b> ${
            newData?.phone
          }`;

          sendContact(message);
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
          });
          setLoader(false);
        } else {
          const error = typeof data.msg === "string" ? data.msg : data.msg[0];
          toast.error(error);
          setLoader(false);
        }
      })
      .catch((err) => {
        toast.error("Une erreur Veuillez réessayer");
        setLoader(false);
      });
  };

  useEffect(() => {
    handeldatechange(myDate);
    console.log("Handeldate change")
  }, [loader]);

  return (
    <>
      <section
        className="about"
        id="Rdv"
        style={{ backgroundImage: `url(./img/arabesque-left-bottom.svg)` }}
      >
        <div className="container">
          <div className="about-detail">
            <div className="">
              <div className="borderContact">
                <div className="about-img">
                  <img src="/img/coif.jpg" alt="" />
                </div>
                <div>
                  <div className="section-title col-md-12">
                    <h1>Prenez rendez-vous</h1>
                    <p>
                      la list les hours possible prenez un rendez vous ,Svp
                      sélect Temps qui vous convient
                    </p>
                  </div>
                  <div className="dateK">
                    <div>
                      <KeyboardDatePicker
                        // orientation="landscape"

                        inputVariant="outlined"
                        format="dd/MM/yyyy"
                        InputProps={{ readOnly: true }}
                        value={myDate}
                        onChange={(date) => {
                          handeldatechange(date);
                          setMyDate(date);
                        }}
                        id="datePicker"
                        minDate={disablePastDate()}
                      />
                    </div>
                  </div>
                  <div className="timeK react-email-form">
                    {!loader &&
                      arrTime.map((tm, i) => (
                        <div
                          key={i}
                          data-bs-toggle="modal"
                          data-bs-target="#myModal"
                          onClick={() => setTime(tm)}
                          className=" form-group mt-md-0 me-2"
                        >
                          <div className="hours my-2 p-2">{tm}</div>
                        </div>
                      ))}
                    {loader && (
                      <span style={{ textAlign: "center" }}>
                        En cour de traitement...
                      </span>
                    )}
                  </div>
                </div>
                <div
                  className="modal"
                  id="myModal"
                  style={{ marginTop: "80px" }}
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Prenez rendez-vous</h5>
                        <button
                          type="button"
                          className="btn-close"
                          id="btn-close"
                          data-bs-dismiss="modal"
                          style={{ color: "white" }}
                        ></button>
                      </div>
                      <div className="modal-body">
                        <form
                          onSubmit={handleSubmitContact}
                          className="react-email-form row"
                        >
                          <div className="section-title col-md-12"></div>
                          <div className="col-md-6 mb-2 col-sm-12 form-group mt-md-0">
                            <input
                              type="text"
                              name="firstname"
                              className="form-control"
                              id="firstname"
                              placeholder="Nom *"
                              value={firstname}
                              onChange={(e) => handleInputChange(e)}
                            />
                            {inputError.firstname !== "" && (
                              <div className="error">
                                {inputError.firstname}
                              </div>
                            )}
                          </div>

                          <div className="col-md-6 mb-2 col-sm-12 form-group mt-3 mt-md-0">
                            <input
                              type="text"
                              name="lastname"
                              className="form-control"
                              id="lastname"
                              placeholder="Prénom *"
                              value={lastname}
                              onChange={(e) => handleInputChange(e)}
                            />
                            {inputError.lastname !== "" && (
                              <div className="error">{inputError.lastname}</div>
                            )}
                          </div>

                          <div className="col-md-12 mb-2 col-sm-12 form-group mt-3 mt-md-0">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="E-mail *"
                              value={email}
                              onChange={(e) => handleInputChange(e)}
                            />
                            {inputError.email !== "" && (
                              <div className="error">{inputError.email}</div>
                            )}
                          </div>

                          <div className="col-md-12 mb-2 col-sm-12 form-group mt-3 mt-md-0">
                            <input
                              type="number"
                              className="form-control"
                              name="phone"
                              id="phone"
                              placeholder="Télephone *"
                              value={phone}
                              onChange={(e) => handleInputChange(e)}
                            />
                            {inputError.phone !== "" && (
                              <div className="error">{inputError.phone}</div>
                            )}
                          </div>
                          {!loader && (
                            <button
                              id="btnEnvoyez"
                              type="submit"
                              style={{
                                marginBottom: "20px",
                                marginTop: "20px",
                              }}
                              className="btn"
                              disabled={!enabled}
                            >
                              Envoyer
                            </button>
                          )}
                          {loader && (
                            <button
                              id="btnEnvoyez"
                              type="submit"
                              style={{
                                marginBottom: "20px",
                                marginTop: "20px",
                              }}
                              className="btn"
                              disabled
                            >
                              <i className="fas fa-spinner fa-spin"></i>
                            </button>
                          )}
                        </form>
                      </div>
                    </div>
                  </div>
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


