import React, { useState, useEffect } from "react";
import bgImage from "./assets/rose.svg";
// import bgImage2 from "./assets/bgimg.svg";
import Fullimage from "./assets/shape.svg";
import CenteredImage from "./assets/video.jpg";
import AboutImage from "./assets/about-image.svg";
import AboutImage2 from "./assets/about-image-2.svg";
import Avatar1 from "./assets/auth-01.png";
import Avatar2 from "./assets/auth-02.png";
import Avatar3 from "./assets/auth-03.png";
import SvgvImage from "./assets/Svgimage.svg";
import MoonSvg from "./assets/MoonSvg.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Section1() {
  return (
    <>
      <section
        className=" h-[600px] w-full bg-indigo-950 pb-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "550px",
          backgroundPosition: " center",
        }}
      >
        <h1 className=" text-4xl lg:text-6xl sm:text-4xl md:text-5xl font-bold text-white text-center pt-10 px-5  lg:px-52 md:px-9 sm:px-12">
          Startup Focused Stay Awake and be Energized
        </h1>
        <p className=" text-slate-100 px-12 sm:px-12 md:px-14  lg:px-48 text-xl lg:text-xl font-semibold pt-6 lg:font-bold text-center ">
          A Complete Tailwind CSS Web Template Crafted for - Startup, SaaS,
          Business, Software and Agencies. Comes with high-quality design and
          everything you need!
        </p>
        <div className=" text-blue-300 lg:text-sky-600 font-extrabold text-7xl animate-spin text-center -rotate-[50deg]">
          <ion-icon name="send-outline"></ion-icon>
        </div>

        <div className=" flex justify-center  w-[100%] gap-4  mt-10">
          <button className=" bg-sky-700 px-3 py-3 lg:px-5 lg:py-4 rounded-lg font-medium text-lg text-white hover:bg-sky-600 duration-200 w-[180px] md:w-[190px] lg:w-[200px]">
            Get started
          </button>
        </div>
      </section>
    </>
  );
}

export default Section1;

export function Section2() {
  const Data = [
    { id: 0, heading: "Crafted for Startups", icon: "cube-outline" },
    { id: 1, heading: "High-quality Design", icon: "prism-outline" },
    { id: 2, heading: "All Essential Components", icon: "apps-outline" },
    { id: 3, heading: "Speed Optimized", icon: "settings-outline" },
    { id: 4, heading: "Fully Customizable", icon: "card-outline" },
    { id: 5, heading: "Regular Updates", icon: "file-tray-stacked-outline" },
  ];
  return (
    <section className=" w-full h-auto bg-slate-900">
      <h1 className=" text-center text-4xl text-white pt-[7rem] px-5 font-extrabold">
        Main Features
      </h1>
      <p className=" text-white text-xl font-semibold px-10 sm:px-20 lg:px-72 pt-9 pb-12 text-center">
        There are many variations of passages of Lorem Ipsum available but the
        majority have suffer alteration in some form.
      </p>
      <div
        className=" h-[auto] w-[100%]  grid grid-cols-1 place-content-center
       place-items-center  md:gap-5 md:grid-cols-2 lg:grid-cols-3 px-2 lg:px-10"
      >
        {Data.map((data, index) => (
          <div
            key={index}
            className="w-[100%] md:w-[80%] sm:w-[70%] h-[400px] px-3"
          >
            <div className=" bg-sky-700 opacity-70 p-2 flex items-center justify-center mb-3 w-20 text-sky-100 text-5xl rounded-md">
              <ion-icon name={data.icon}></ion-icon>
            </div>
            <h1 className=" font-bold text-white text-3xl pb-8">
              {data.heading}
            </h1>
            <p className=" font-medium  text-zinc-400 text-lg leading-normal ">
              Tuae nam ex similique incidunt expedita exerci tationem
              laudantium. Repellendus quisquam numquam perferendis earum
              sapiente non tempore? Fugit repellat ut maiores.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Section3() {
  return (
    <section className=" bg-indigo-950 w-full h-auto">
      <h1 className=" text-center text-4xl text-white pt-[7rem] px-5 font-extrabold">
        We are ready to help
      </h1>
      <p className=" text-white text-xl font-semibold px-10 sm:pl-16 lg:px-72 pt-9 pb-12 text-center whitespace-break-spaces">
        There are many variations of passages of Lorem Ipsum available but the
        majority have suffered alteration in some form.
      </p>
      <div
        className=" w-full h-[400px]"
        style={{
          backgroundImage: `url(${Fullimage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className=" grid place-content-center place-items-center relative">
          <img
            src={CenteredImage}
            alt="Video"
            className=" object-cover w-[80%] h-[300px] lg:w-[90%] lg:h-[370px]  rounded-lg"
          />
          <div
            className=" absolute lg:left-[50%] lg:top-[50%] left-[45%] top-[45%] bg-white text-black rounded-full animate-pulse h-[60px] w-[60px]
           flex justify-center items-center p-4 text-4xl cursor-pointer"
          >
            <ion-icon name="play-outline"></ion-icon>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Section4() {
  return (
    <section className=" bg-slate-900 h-auto w-full flex sm:flex-col lg:flex-row  flex-col-reverse px-5 py-10 border-b-[1px]">
      <div className="w-[100%] h-[auto] lg:px-10 sm:px-16 md:px-20  grid place-content-center place-items-center">
        <h1 className=" font-bold text-4xl text-white ">
          Crafted for Startup, SaaS and Business Sites.
        </h1>
        <p className=" font-medium text-lg text-sky-100 md:text-center lg:text-left">
          The main 'thrust' is to focus on educating attendees on how to best
          protect highly vulnerable business applications with interactive panel
          discussions and roundtables.
        </p>
        <div className=" w-full h-auto grid grid-cols-1  md:grid-cols-2 md:place-content-center md:place-items-center">
          <div className=" py-5 ">
            <h1 className="text-sky-100 font-semibold text-xl flex items-center lg:text-left gap-3 pb-2">
              <span className="  text-lime-500 text-3xl">
                <ion-icon name="checkbox-outline"></ion-icon>
              </span>
              Premium quality
            </h1>
            <h1 className="text-sky-100 font-semibold text-xl flex items-center gap-3  pb-2">
              <span className="  text-lime-500 text-3xl">
                <ion-icon name="checkbox-outline"></ion-icon>
              </span>
              No code required
            </h1>
            <h1 className="text-sky-100 font-semibold text-xl flex items-center gap-3  pb-2">
              <span className="  text-lime-500 text-3xl">
                <ion-icon name="checkbox-outline"></ion-icon>
              </span>
              Use for lifetime
            </h1>
          </div>

          <div className=" py-5 ">
            <h1 className="text-sky-100 font-semibold text-xl flex items-center gap-3 pb-2">
              <span className="  text-lime-500 text-3xl">
                <ion-icon name="checkbox-outline"></ion-icon>
              </span>
              Regular updates
            </h1>
            <h1 className="text-sky-100 font-semibold text-xl flex items-center gap-3  pb-2">
              <span className="  text-lime-500 text-3xl">
                <ion-icon name="checkbox-outline"></ion-icon>
              </span>
              Rich documentation
            </h1>
            <h1 className="text-sky-100 font-semibold text-xl flex items-center gap-3  pb-2">
              <span className="  text-lime-500 text-3xl">
                <ion-icon name="checkbox-outline"></ion-icon>
              </span>
              Developer friendly
            </h1>
          </div>
        </div>
      </div>
      <div className="w-[100%]  h-[400px] grid place-content-center">
        <img
          src={AboutImage}
          alt=""
          className=" h-[350px] md:h-[400px] object-cover"
        />
      </div>
    </section>
  );
}

export function Section5() {
  const Datas = [
    { id: 0, heading: "Bug free code" },
    { id: 1, heading: "Premier support" },
    { id: 2, heading: "Regular updates" },
  ];
  return (
    <section className=" bg-slate-900 h-auto grid grid-cols-1 lg:grid-cols-2 py-10">
      <div className="w-[100%]  h-[400px] grid place-content-center">
        <img
          src={AboutImage2}
          alt=""
          className=" h-[350px] md:h-[400px] object-cover"
        />
      </div>
      <div className=" grid grid-flow-col grid-rows-3 gap-4">
        {Datas.map((datas, index) => (
          <div
            key={index}
            className="pr-5 grid  sm:px-12 lg:px-3 px-6 md:text-center"
          >
            <h1 className=" font-semibold text-2xl text-white">
              {datas.heading}
            </h1>
            <p className=" text-zinc-400 font-medium text-lg pr-6">
              Lorem ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit, sed do eiusmod tempor
              <br />
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Section6() {
  const Cards = [
    {
      id: 0,
      heading: "Lethium Frenci",
      text: "Founder @TailGrids",
      img: `${Avatar1}`,
    },
    {
      id: 1,
      heading: "Devid Weilium",
      text: "Founder @UIdeck",
      img: `${Avatar2}`,
    },
    {
      id: 2,
      heading: "Musharof Chy",
      text: "Founder @Lineicons",
      img: `${Avatar3}`,
      space: true,
    },
  ];
  const Icon = [1, 2, 3, 4, 5];
  return (
    <section
      className=" w-full bg-indigo-950 h-auto "
      style={{
        backgroundImage: `url(${Fullimage})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className=" text-white font-extrabold text-4xl text-center py-5 pt-9">
        What Our Users Says
      </h1>
      <p className=" font-medium text-lg text-white text-center px-20 pt-4">
        There are many variations of passages of Lorem Ipsum
        <br />
        available but the majority have suffered alteration in some form.
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3 w-full h-auto px-6 md:px-14 py-10">
        {Cards.map((card, index) => (
          <div
            key={index}
            className={`bg-slate-700 w-[100%] sm:w-[60%] md:w-[100%] rounded-2xl shadow-xl h-[330px] mx-auto ${
              card.space && "md:ml-[50%] lg:m-0"
            } `}
          >
            <div className=" text-yellow-500 text-lg p-5 ">
              {Icon.map((star) => (
                <ion-icon key={star} name="star-sharp"></ion-icon>
              ))}
              <p className=" font-medium text-lg text-white pt-8 pb-6">
                “Our members are so impressed. It's intuitive. It's clean. It's
                distraction free. If you're building a community.
              </p>
              <hr />
              <div className=" flex gap-4 pt-10 items-center">
                <img
                  src={card.img}
                  width={60}
                  height={60}
                  className=" rounded-full"
                  alt=""
                />
                <div>
                  <h1 className=" text-white font-semibold">{card.heading}</h1>
                  <p className=" text-zinc-400 font-normal text-base">
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Section7() {
  const BiggerCards = [
    { id: 0, buttonText: "Basic trial", type: "Basic", money: "  $40/" },
    { id: 1, buttonText: "Plus trial", type: "Plus", money: "$399/" },
    { id: 2, buttonText: "Pro trial", type: "Pro", money: "$589 /", gap: true },
  ];
  const CheckTexts = [
    { id: 0, check: "All UI Components" },
    { id: 1, check: "Use with Unlimited Projects" },
    { id: 2, check: "Commercial Use" },
    { id: 3, check: "Email Support" },
  ];
  return (
    <section
      className=" bg-slate-900 w-full h-auto pt-16 pb-16"
      style={{
        backgroundImage: `url(${SvgvImage})`,
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "400px",
      }}
    >
      <h1 className=" text-white font-bold text-3xl md:text-4xl lg:text-5xl text-center py-5 px-5">
        Simple and Affordable Pricing
      </h1>
      <p className=" text-zinc-100 font-medium text-lg text-center py-8 px-5">
        There are many variations of passages of Lorem Ipsum available but the
        majority have suffered alteration in some form.
      </p>
      <div className=" grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-10 px-5 sm:px-10 place-content-center">
        {BiggerCards.map((card, index) => (
          <div
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "200px",
              backgroundPosition: "bottom",
            }}
            key={index}
            className={` w-[95%] sm:w-[60%] md:w-[90%] ${
              card.gap && "md:ml-[53%] lg:m-0"
            } h-[500px] bg-indigo-600 opacity-80 mx-auto rounded-xl shadow-2xl px-6 py-7`}
          >
            <div className=" w-full flex justify-between items-center">
              <h1 className=" font-bold text-4xl text-white">
                {card.money}
                <span className=" text-zinc-300">mo</span>{" "}
              </h1>
              <p className=" text-white font-semibold text-2xl">{card.type}</p>
            </div>
            <p className=" text-lg py-5 text-zinc-100 font-medium">
              Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim.
            </p>
            <button className="w-[90%] py-3 rounded-lg shadow-lg text-white text-[1.2rem] font-medium bg-slate-800 mx-auto">
              Start {card.buttonText}
            </button>
            <hr className=" mx-auto mt-4 bg-gray-500 px-6 mb-4" />
            <div className=" flex flex-col gap-3 ">
              {CheckTexts.map((check, text) => (
                <h1
                  key={text}
                  className="text-zinc-100 font-medium text-[1.2rem] flex items-center gap-2"
                >
                  <span className=" text-red-700 text-3xl">
                    <ion-icon name={`checkbox-outline`}></ion-icon>
                  </span>{" "}
                  {check.check}
                </h1>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ScrollToTop() {
  const [visibleButton, setVisibleButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, []);

  const handleScrollTop = () => {
    const scrollToTop = window.pageYOffset;
    const scrollThresholdButton = 300;
    setVisibleButton(scrollToTop <= scrollThresholdButton);
  };
  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={ScrollToTop}
      className={`h-[45px] w-[45px] ${
        visibleButton ? "hidden" :"block"
      } z-[999] rounded-full p-1   bg-sky-800 animate-bounce text-white  text-3xl fixed bottom-[40px] right-[40px]`}
    >
      <ion-icon name="chevron-up-outline"></ion-icon>
    </button>
  );
}

const schema = yup.object({
  name: yup
    .string()
    .required("Name is a required field")
    .max(10, "That's too long!"),
  email: yup
    .string()
    .required("Email  is a required field")
    .email("Email is not valid"),
  message: yup
    .string()
    .required("Message must be filled out")
    .max(20, "That's too long!"),
});

export function Contact() {
  const [showalert, setShowAlert] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [text, setText] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowAlert(true);
      setText(data.name);
    }, 3000);
  };

  const Inputs = [
    {
      id: 0,
      placeholder: "Enter your name",
      type: "text",
      label: "Name",
      errors: "name",
    },
    {
      id: 0,
      placeholder: "Enter your email",
      type: "email",
      label: "Email",
      errors: "email",
    },
  ];
  return (
    <section className=" bg-indigo-950 w-full h-auto grid lg:grid-cols-3 grid-cols-1">
      <div className=" w-[100%] h-[auto]  col-span-2  p-5 lg:p-10 ">
        {showalert ? (
          <div className=" relative bg-white px-10 py-5 rounded-lg w-[90%] lg:w-[55%] md:w-[60%] sm:w-[80%] mx-auto h-[300px] shadow-xl flex items-center flex-col">
            <span className=" text-lime-600 text-8xl flex justify-center items-center mt-3">
              <ion-icon name="checkmark-circle-outline"></ion-icon>
            </span>
            <h1 className={` text-black font-medium py-4 text-xl text-center`}>
              Weldone <span className=" text-xl font-bold"> {text}</span> <br />
              Your Ticket has been opened
            </h1>

            <span
              onClick={() => setShowAlert(false)}
              className=" text-black absolute bg-zinc-300 p-1 flex justify-center
                 items-center rounded-md top-4 right-4 text-4xl hover:text-red-600"
            >
              <ion-icon name="close-circle-outline"></ion-icon>
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="px-4 py-10 bg-slate-800 h-auto w-full sm:w-[80%] md:w-[70%] lg:w-[90%] lg:mx-0 sm:mx-auto rounded-lg shadow-xl">
              <h1 className=" text-white font-bold text-4xl pb-4 px-1 lg:px-4">
                Need Help? Open a Ticket
              </h1>
              <p className=" text-white font-medium text-lg px-1 lg:px-4">
                Our support team will get back to you ASAP via email.
              </p>

              <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-3 lg:px-4  pt-7">
                {Inputs.map((input, index) => (
                  <div key={index}>
                    <label
                      htmlFor="Name"
                      className=" font-medium text-zinc-400 text-lg pb-3"
                    >
                      {input.label}
                    </label>
                    <input
                  
                      disabled={Loading}
                      type={input.type}
                      {...register(input.errors)}
                      placeholder={input.placeholder}
                      autoComplete="off"
                      className={` ${
                        Loading ? "cursor-not-allowed" : " cursor-auto"
                      } py-3 rounded-md placeholder:text-lg placeholder:font-medium
                        border-[1px] border-blue-700 placeholder:text-zinc-300 outline-none px-5
                       shadow-xl text-white bg-slate-700 w-[100%] lg:w-[90%]`}
                    />
                    <span className=" text-red-600 py-2 font-medium">
                      {errors[input.errors]?.message}
                    </span>
                  </div>
                ))}
              </div>

              <div className=" w-full grid grid-cols-1  py-6 lg:px-4 px-1">
                <label
                  htmlFor="Name"
                  className=" font-medium text-zinc-400 text-lg pb-3"
                >
                  Your Message
                </label>
                <textarea
                  disabled={Loading}
                  placeholder="Enter your Message"
                  {...register("message")}
                  className={` ${
                    Loading ? "cursor-not-allowed" : " cursor-auto"
                  } 
           placeholder:text-lg placeholder:font-medium  mx-auto  
               px-3 py-5 w-[100%] lg:w-[100%] bg-slate-700 h-[150px]    
           border-[1px] border-blue-700 placeholder:text-zinc-300 resize-none
             text-white font-normal text-md outline-none rounded-md`}
                ></textarea>
                <span className=" text-red-600 py-2 font-medium">
                  {errors["message"]?.message}
                </span>
              </div>
              <button
                type="submit"
                className={`
                ${Loading ? "cursor-not-allowed" : " cursor-auto"} 
                bg-blue-500 px-4 py-3 ml-3 lg:ml-5 focus:ring-4 ring-inset ring-blue-200 hover:text-black duration-300 hover:bg-blue-300 rounded-lg w-[200px] text-white font-semibold`}
              >
                {Loading ? (
                  <span className="  animate-spin inline-block text-2xl font-semibold text-white">
                    <ion-icon name="refresh-outline"></ion-icon>
                  </span>
                ) : (
                  "Submit Ticket"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
      <div className=" w-full h-[auto] mt-4 bg-indigo-950 flex justify-start items-center px-9 sm:px-0 pr-3">
        <img
          src={AboutImage}
          alt="Images"
          className=" mx-auto object-contain"
        />
      </div>
    </section>
  );
}

export function Footer() {
  const Links = [
    {
      id: 0,
      Heading: "Useful Links",
      linkText: ["About", "Pricing", "Blog"],
      Url: ["/about", "/pricing", "/blog"],
    },
    {
      id: 1,
      Heading: "Terms",
      linkText: ["TOS", "Privacy Policy", "Refund Policy"],
      Url: ["/", "/", "/"],
    },
    {
      id: 2,
      Heading: "Support and help",
      linkText: ["  Open Support Ticket", " Terms of Use", "   About"],
      Url: ["/", "/", "/"],
    },
  ];
  return (
    <>
      <footer
        className=" w-full h-[auto] bg-indigo-900"
        style={{
          backgroundImage: `url(${SvgvImage}), url(${MoonSvg})`,
          backgroundPosition: "left, right",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "100px, 100px",
        }}
      >
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-8">
          <div className=" pl-3 lg:pl-5 w-[100%]">
            <div className=" flex  items-center gap-2">
              <div className="text-5xl text-sky-600">
                <ion-icon name="logo-bitbucket"></ion-icon>
              </div>
              <div className=" py-10">
                <h1 className=" text-white font-bold text-4xl">Startup</h1>
              </div>
            </div>

            <div>
              <h1 className=" font-bold text-xl text-white">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                lobortis.
              </h1>
            </div>
            <div className="flex items-center text-white gap-4 text-2xl py-9">
              <ion-icon name="logo-facebook"></ion-icon>
              <ion-icon name="logo-whatsapp"></ion-icon>
              <ion-icon name="logo-instagram"></ion-icon>
              <ion-icon name="logo-twitter"></ion-icon>
            </div>
          </div>

          {Links.map((link, index) => (
            <div
              key={index}
              className=" flex flex-col gap-5 py-10 w-[100%] pl-3 lg:pl-5"
            >
              <h1 className=" font-bold text-xl text-white">{link.Heading}</h1>
              <p className="text-lg font-semibold text-white  hover:underline">
                <Link to={link.Url[0]}>{link.linkText[0]}</Link>
              </p>
              <p className="text-lg font-semibold text-white  hover:underline">
                <Link to={link.Url[1]}>{link.linkText[1]}</Link>
              </p>
              <p className="text-lg font-semibold text-white  hover:underline">
                <Link to={link.Url[2]}>{link.linkText[2]}</Link>
              </p>
            </div>
          ))}
        </div>
      </footer>

      <div className=" bg-slate-950 w-full h-[100px] flex justify-center items-center">
        <h1 className=" text-white font-medium text-xl">
          © Crafted by UIdeck for You!
        </h1>
      </div>
    </>
  );
}
