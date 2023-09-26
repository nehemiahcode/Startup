import React, { useRef } from "react";
import { useState } from "react";
import Mainlayoutdiv from "./Mainlayoutdiv";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import * as yup from "yup";
import { Link } from "react-router-dom";

const schema = yup.object({
  firstName: yup.string().required("Firstname is a required field"),
  lastName: yup.string().required("Lastname is a required field"),
  email: yup
    .string()
    .required("Email  is a required field")
    .email("Email is not valid"),
  password: yup
    .string()
    .required("Password word is a required field")
    .min(5, "It must be more than 5 characters")
    .max(10, "It must not be more than 10 characters"),
});

function Signuppage() {
  const [show, setShow] = useState(false);
  const [Loading, setLoading] = useState(false);
  const Form = useRef()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setLoading(true);
    emailjs
    .sendForm(
      "service_kk9rv0k",
      "template_hm08gbr",
      form.current,
      "TRHR4_xoRVQ1aaq9v"
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
    setTimeout(() => {
      setLoading(false);
      setShow(true);
      reset();
    }, 3000);
  };

  const Inputs = [
    {
      id: 0,
      type: "text",
      placeholder: "Your firstname ",
      errors: "firstName",
    },
    { id: 1, type: "text", placeholder: "Your lastname ", errors: "lastName" },
    { id: 2, type: "email", placeholder: "Your email", errors: "email" },
    {
      id: 3,
      type: "password",
      placeholder: "Your password",
      errors: "password",
    },
    // {id:2, type:"text", placeholder:"Your text",}
  ];
  return (
    <Mainlayoutdiv>
      <section className=" bg-indigo-950 w-full h-[auto] py-10 px-5 grid grid-cols-1 ">
        <div className=" grid place-content-center w-full grid-cols-1">
          <div className="  w-full h-[auto] flex justify-center">
            {show ? (
              <div className=" relative bg-white px-10  rounded-lg w-[90%] lg:w-[40%] md:w-[60%] sm:w-[80%] h-[auto] py-5 shadow-xl flex items-center flex-col">
                <span className=" text-lime-600 text-8xl flex justify-center items-center mt-3">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                </span>
                <h1
                  className={` text-black font-medium py-4 text-xl text-center`}
                >
                  Successful!
                  <br />
                  Your Account has been activated!
                </h1>

                <span
                  onClick={() => setShow(false)}
                  className=" text-black absolute bg-zinc-300 p-1 flex justify-center
                 items-center rounded-md top-4 right-4 text-4xl hover:text-red-600"
                >
                  <ion-icon name="close-circle-outline"></ion-icon>
                </span>
                <button className=" bg-slate-800 text-white text-lg font-semibold px-3 py-2 rounded-md mt-3">
                  <Link to={"/"}>To home</Link>
                </button>
              </div>
            ) : (
              <div className=" bg-slate-900 opacity-80 px-2 py-5 w-[100%] flex flex-col justify-center md:w-[70%] sm:w-[80%] lg:w-[40%] mx-auto h-[auto] rounded-lg shadow-xl">
                <h1 className=" text-white font-semibold text-3xl pl-5">
                  Sign up for an your account
                </h1>
                <form
                ref={Form}
                  onSubmit={handleSubmit(onSubmit)}
                  className="px-3 py-7 w-[100%] h-[auto] flex flex-col gap-3"
                >
                  {Inputs.map((input, index) => (
                    <div key={index} className=" flex flex-col w-full h-auto">
                      <input
                        type={input.type}
                        name={input.errors}
                        {...register(input.errors)}
                        placeholder={input.placeholder}
                        disabled={Loading}
                        autoComplete="off"
                        className={` bg-slate-700 text-white placeholder:font-medium ${
                          Loading ? " cursor-not-allowed" : " "
                        }
                          px-4 py-3 w-[95%] sm:w-[80%] md:w-[70%] lg:w-[80%] rounded-md shadow-xl outline-none  border-[1px] border-sky-700`}
                      />
                      <span className=" text-red-600 py-2 font-medium">
                        {errors[input.errors]?.message}
                      </span>
                    </div>
                  ))}
                  <div>
                    <label className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        className=" h-5 w-5 text-indigo-600 bg-white border-2 border-indigo-600 rounded"
                        //   checked={isChecked}
                        //   onChange={handleCheckboxChange}
                      />
                      <span className="ml-2 text-zinc-200">Remember me</span>
                    </label>
                  </div>
                  <div className=" flex items-center gap-20  w-full pr-3 lg:justify-normal lg:gap-20">
                    <button
                      type="submit"
                      disabled={Loading}
                      className={` px-4 py-2 mt-2 rounded-md ${
                        Loading ? " cursor-not-allowed" : " cursor-pointer"
                      }
                   bg-sky-700 text-xl w-[160px] focus:ring-2 ring-inset ring-yellow-50 text-white font-medium`}
                    >
                      {Loading ? (
                        <span className="  animate-spin inline-block text-2xl font-semibold text-white">
                          <ion-icon name="refresh-outline"></ion-icon>
                        </span>
                      ) : (
                        "Submit"
                      )}
                    </button>
                    <h1 className=" text-sky-400 underline font-medium text-lg">
                      <Link to={"/signin"}>Sign in</Link>
                    </h1>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </Mainlayoutdiv>
  );
}

export default Signuppage;
