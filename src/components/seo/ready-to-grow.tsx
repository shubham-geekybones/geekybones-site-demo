import * as React from "react";
import { useForm } from "react-hook-form";

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const URL_REGEX = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

const ReadyToGrow = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log("DATA",data);

    return (
        <section className="contect-sec container-fluid text-center gb-md-pad-ver">
            <div className='container'>
                <div className="contect-sec-heading ">
                    <h2>Achieve <span>Incredible Results</span> Get <span>Free</span> Proposal Today!</h2>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="contect-common-col">
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" className="form-control contect-form-control"
                                           placeholder="Enter the website"
                                           {...register('URL', {required: "URL is required",
                                               pattern: {
                                                   value: URL_REGEX,
                                                   message:"Invalid URL"
                                               }
                                           })
                                           }/>
                                    {errors.URL && <span className="error-message">{errors.URL.message}</span>}
                                </div>
                                <div className="col-md-6">
                                    <input type="text"
                                           className="form-control contect-form-control contect-second-form-control"
                                           placeholder="Enter your email"
                                           {...register('Email', {required: "Email is required",
                                               pattern: {
                                                   value: EMAIL_REGEX,
                                                   message:"Invalid Email"
                                               }
                                           })
                                           } />
                                    {errors.Email && <span className="error-message">{errors.Email.message}</span>}
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
                <button className="gb-animate-md-btn-red mt-3 mt-md-4" onClick={handleSubmit(onSubmit)}> Send me a proposal</button>
            </div>
        </section>
    )
}
export default ReadyToGrow;
