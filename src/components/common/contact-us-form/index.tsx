import * as React from "react";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Vortex } from "react-loader-spinner";

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_NUMBER_REGEX = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const messageRef = useRef<HTMLDivElement>(null);
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("/api/sendgrid-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setSuccessMessage("Email sent successfully!");
      if (messageRef.current) {
        messageRef.current.style.display = 'block';
        setTimeout(() => {
          if (messageRef.current) {
            messageRef.current.style.display = 'none';
          }
        }, 3000);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      alert("Failed to send email.");
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (error) => {
    if (!error) return null;
    if (typeof error === "string") return error;
    if (error.message) return error.message;
    return null;
  };

  return (
    <div className="form form-wrap">
       <div className="alert alert-success" role="alert" ref={messageRef} style={{ display: 'none', color: 'green', marginTop: '10px' }}>
        {successMessage}
      </div>
      <div className="row">
        <div className="col-sm-6 col-6">
          <div className="common-input-wrap">
            <input
              type="text"
              className="form-control contact-form-control"
              placeholder="Name"
              {...register("Name", { required: "Name is required" })}
            />
            {errors.Name && (
              <span className="error-message">
                {getErrorMessage(errors.Name)}
              </span>
            )}
          </div>
        </div>
        <div className="col-sm-6 col-6">
          <div className="common-input-wrap">
            <input type="email" className="form-control contact-form-control" placeholder="Email" {...register("Email", {required: "Email is required",pattern: { value: EMAIL_REGEX, message: "Invalid Email" },})}/>
            {errors.Email && (<span className="error-message">
                {getErrorMessage(errors.Email)}
              </span>
            )}
          </div>
        </div>
        <div className="col-sm-6 col-6">
          <div className="common-input-wrap">
            <input
              type="text"
              className="form-control contact-form-control"
              placeholder="Phone"
              {...register("Phone", {
                required: "Phone Number is required",
                pattern: {
                  value: PHONE_NUMBER_REGEX,
                  message: "Invalid Phone number",
                },
              })}
            />
            {errors.Phone && (
              <span className="error-message">
                {getErrorMessage(errors.Phone)}
              </span>
            )}
          </div>
        </div>
        <div className="col-sm-6 col-6">
          <div className="common-input-wrap">
            <select
              className="form-control contact-form-control"
              {...register("Interest", {
                required: "Interest in is required",
              })}
            >
              <option value="">Interested In</option>
              <option>Web development</option>
              <option>Mobile App Development</option>
              <option>Digital Marketing</option>
              <option>Graphic Design</option>
            </select>
            {errors.Interest && (
              <span className="error-message">
                {getErrorMessage(errors.Interest)}
              </span>
            )}
          </div>
        </div>
        <div className="col-sm-6 col-6">
          <div className="common-input-wrap">
            <input
              type="text"
              className="form-control contact-form-control"
              placeholder="Your Budget"
              {...register("Budget", { required: "Budget is required" })}
            />
            {errors.Budget && (
              <span className="error-message">
                {getErrorMessage(errors.Budget)}
              </span>
            )}
          </div>
        </div>
        <div className="col-sm-6 col-6">
          <div className="common-input-wrap">
            <input
              type="text"
              className="form-control contact-form-control"
              placeholder="Skype ID, optional"
              {...register("SkypeID")}
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="common-input-wrap">
            <textarea
              form="usrform"
              className="form-control contact-form-control text-area"
              placeholder="Message"
              {...register("Message", { required: "Message is required" })}
            ></textarea>
            {errors.Message && (
              <span className="error-message">
                {getErrorMessage(errors.Message)}
              </span>
            )}
          </div>
        </div>
      </div>
      <button className="gb-animate-md-btn-red mt-4" onClick={handleSubmit(onSubmit)}
        disabled={loading}
      >
        {loading ? (
          <Vortex
            visible={true}
            height="43"
            width="43"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={['red', 'white', 'blue', 'yellow', 'orange', 'purple']}
          />
        ) : (
          "Submit"
        )}
      </button>
    </div>
  )
}
export default ContactUsForm;
