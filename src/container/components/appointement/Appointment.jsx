import React, { useEffect, useState } from "react";
import {
  createAppointment,
  getTimes,
} from "../../../axios/service/appointment";
import { sendContact } from "../../../telegrame/bot";
import moment from "moment";
import { KeyboardDatePicker } from "@material-ui/pickers";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import 'react-datetime/css/react-datetime.css';
toast.configure();
function Appointment() {
  const [myDate, setMyDate] = useState(new Date());
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

  // disable past dates :
  const disablePastDate = () => {
    var today, dd, mm, yyyy;
    today = new Date();
    dd = today.getDate();
    mm = today.getMonth() + 1;
    yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  const handeldatechange = (date) => {
    setMyDate(date);
    //  console.log(new Date(moment(date).format("MM/dd/yyyy")).toISOString());
    // console.log(moment(date).format("MM/dd/yyyy"));
    getTimes({
      filter: JSON.stringify({ date: moment(date).format("YYYY-MM-DD") }),
    })
      .then(({ data }) => {
        if (!data.err) {
          setArrTime(data.msg);
        } else {
          const error = typeof data.msg === "string" ? data.msg : data.msg[0];
          console.log(error);
        }
      })
      .catch((err) => {
        console.log(err);
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
          console.log(data.msg);
          const error = typeof data.msg === "string" ? data.msg : data.msg[0];
          console.log(error);
          toast.error(error);
       
          setLoader(false);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Une erreur Veuillez réessayer");
        setLoader(false);
      });
  };

  useEffect(() => {
    handeldatechange(new Date());
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
                        // autoOk
                        inputVariant="outlined"
                        format="dd/MM/yyyy"
                        InputProps={{ readOnly: true }}
                        // formatDate={() => moment(new Date()).format('MM-DD-YYYY')}
                        value={myDate}
                        onChange={(date) => {
                          handeldatechange(date);
                        }}
                        // onClick={(date) => {
                        //   handeldatechange(date);
                        // }}
                        id="datePicker"
                        // isValidDate={disablePastDt}
                        minDate={disablePastDate()}
                        // maxDate={disablePastDate()}
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
                      {/* <div className="modal-footer">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="submit" class="btn btn-danger">Cancel</button>
                    </div> */}
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

{
  /* <div className="col-md-6 mb-2 col-sm-12 form-group mt-3 mt-md-0">
<select
  className="form-select lg"
  aria-label="Default select example"
  name="time"
  id="time"
  value={time}
  onChange={(e) => handleInputChange(e)}
  onKeyUp={() => isEmpty()}
>
  <option selected="">Le temps de render-vous *</option>
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


  <div className="col-md-6 mb-2 col-sm-12 form-group mt-3 mt-md-0">
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


*/
}
