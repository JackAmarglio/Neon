import axios from "axios";
import Container from "components/Container";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/css/App.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input/input";
import { isValidPhoneNumber } from "react-phone-number-input";
import svgLoading from "assets/image/loading.svg";
import { toast } from "react-toastify";
import CEO from "../../assets/image/CEO.jpg";
import Linkedin from "../../assets/image/linkedin.jpg";
import WhatsApp from "../../assets/image/whatsapp.jpg";
import Email from "../../assets/image/envelope-regular.svg";

const base_url = process.env.REACT_APP_BASE_URL;

const FooterPart = () => {
  // if (window.performance) {
  //   if (performance.navigation.type == 1) {
  //     document.body.scrollTop = 0;
  //     document.documentElement.scrollTop = 0;
  //   }
  // }
  const [email, setClientEmail] = useState("");
  const [name, setClientName] = useState("");
  const [phone, setClientNumber] = useState("");
  const [company, setClientCompany] = useState("");
  const [loading, setLoading] = useState("");

  const data = {
    email,
    name,
    phone,
    company,
    type: "customer",
  };
  const sendClientData = () => {
    if (email === "") {
      alert("fill email");
    }
    if (name === "") {
      alert("fill name");
    }
    if (phone === "") {
      alert("fill phone");
    }
    if (company === "") {
      alert("fill company");
    }

    if (isValidPhoneNumber(phone)) {
      setLoading("neon");
      axios
        .post(`${base_url}/neon/neon-data`, data)
        .then((res) => {
          if (res.data.success === true) {
            toast.success("Successfully sent", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setClientEmail("");
            setClientName("");
            setClientCompany("");
            setClientNumber("");
          }
          setLoading("");
        })
        .catch((e) => {
          console.log(e);
          setLoading("");
        });
    } else {
      toast.error("Invalid phone number");
    }
  };

  return (
    <div className="footer-part">
      <div className="relative px-10" id="contact">
        <Container>
          {/* <section className="platformBlock bg-dark text-white pt-7 pb-4 pt-md-10 pb-md-7 pt-lg-16 pb-lg-12 pt-xl-23 pb-xl-18">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-4 colXlDiv5">
                  <aside
                    className="pfbColumn position-relative w-100 text-white rounded-lg pt-10 px-4 pb-4 mb-6 wow fadeInUp"
                    data-wow-delay="1s"
                  >
                    <i
                      className="icomoon-telephone position-absolute bg-orange rounded-circle d-flex align-items-center justify-content-center text-white icn wow bounceIn"
                      data-wow-delay="1.5s"
                    >
                      <span className="sr-only">icon</span>
                    </i>
                    <p className="title d-block font-weight-normal mb-1">
                      Call Me At:
                    </p>
                    <p className="d-block fwMedium">
                      <a href="tel:02598569856">025 - 9856 - 9856</a>
                    </p>
                  </aside>
                </div>
                <div className="col-12 col-sm-6 col-md-6">
                  <div className="d-flex">
                    <img
                      src="assets/image/CEO.png"
                      className="icomoon-mail bg-orange rounded-circle d-flex align-items-center justify-content-center text-white icn wow bounceIn"
                      width="100"
                      height="100"
                      alt=""
                      data-wow-delay="2s"
                    />
                    <p className="ml-10 mt-5">CEO - Daiana Kurti</p>
                  </div>
                  <div className="col-12 colXlDiv4 mt-10">
                    <aside
                      className="pfbColumn position-relative w-100 text-white rounded-lg pt-10 px-4 pb-4 mb-6 wow fadeInUp"
                      data-wow-delay="1.5s"
                    >
                      <img
                        src="assets/image/envelope-regular.svg"
                        className="icomoon-mail position-absolute bg-orange rounded-circle d-flex align-items-center justify-content-center text-white icn wow bounceIn"
                        data-wow-delay="2s"
                        alt=""
                      >
                        <span className="sr-only">icon</span>
                      </img>
                      <p className="title d-block font-weight-normal mb-1">
                        Email At:
                      </p>
                      <p className="d-block fwMedium">
                        <a href="d.kurtiedu@gmail.com">d.kurtiedu@gmail.com</a>
                      </p>
                    </aside>
                  </div>
                  <div className="col-12 colXlDiv4">
                    <aside
                      className="pfbColumn position-relative w-100 text-white rounded-lg pt-10 px-4 pb-4 mb-6 wow fadeInUp"
                      data-wow-delay="2s"
                    >
                      <img
                        src="assets/image/linkedin.jpg"
                        className="position-absolute bg-orange rounded-circle d-flex align-items-center justify-content-center text-white icn wow bounceIn"
                        data-wow-delay="2.5s"
                        alt=""
                      >
                        <span className="sr-only">icon</span>
                      </img>
                      <p className="title d-block font-weight-normal mb-1">
                        Linkedin
                      </p>
                      <p className="d-block fwMedium">
                        <a
                          href="https://www.linkedin.com/in/daiana-kurti-591913139"
                          target=""
                        >
                          https://www.linkedin.com/in/daiana-kurti-591913139
                        </a>
                      </p>
                    </aside>
                  </div>
                  <div className="col-12 colXlDiv4">
                    <aside
                      className="pfbColumn position-relative w-100 text-white rounded-lg pt-10 px-4 pb-4 mb-6 wow fadeInUp"
                      data-wow-delay="2.5s"
                    >
                      <img
                        src="images/whatsapp.jpg"
                        className="position-absolute bg-orange rounded-circle d-flex align-items-center justify-content-center text-white icn wow bounceIn"
                        data-wow-delay="3s"
                        alt=""
                      >
                        <span className="sr-only">icon</span>
                      </img>
                      <p className="title d-block font-weight-normal mb-1">
                        Whatsapp
                      </p>
                      <p className="d-block fwMedium">
                        <p>+1 (203) 538‑6274</p>
                      </p>
                    </aside>
                  </div>
                  <div className="col-12 colXlDiv4">
                    <aside
                      className="pfbColumn position-relative w-100 text-white rounded-lg pt-10 px-4 pb-4 mb-6 wow fadeInUp"
                      data-wow-delay="3s"
                    >
                      <img
                        src="assets/image/telegram-brands.svg"
                        className="position-absolute bg-orange rounded-circle d-flex align-items-center justify-content-center text-white icn wow bounceIn"
                        data-wow-delay="3.5s"
                        alt=""
                      >
                        <span className="sr-only">icon</span>
                      </img>
                      <p className="title d-block font-weight-normal mb-1">
                        Telegram
                      </p>
                      <p className="d-block fwMedium">
                        <a href="https://t.me/@bgdk12" target="">
                          DK
                        </a>
                      </p>
                    </aside>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6">
                  <div className="d-flex">
                    <img
                      src="assets/image/profile.jpg"
                      className="icomoon-mail bg-orange rounded-circle d-flex align-items-center justify-content-center text-white icn wow bounceIn"
                      data-wow-delay="2s"
                      alt=""
                      width="100"
                      height="100"
                    />
                    <p className="ml-10 mt-5">CTO - Lee Ming</p>
                  </div>
                  <div className="col-12 colXlDiv4 mt-8">
                    <aside
                      className="pfbColumn position-relative w-100 text-white rounded-lg pt-10 px-4 pb-4 mb-6 wow fadeInUp"
                      data-wow-delay="1.5s"
                    >
                      <img
                        src="assets/image/envelope-regular.svg"
                        className="icomoon-mail position-absolute bg-orange rounded-circle d-flex align-items-center justify-content-center text-white icn wow bounceIn"
                        data-wow-delay="2s"
                        alt=""
                      >
                        <span className="sr-only">icon</span>
                      </img>
                      <p className="title d-block font-weight-normal mb-1">
                        Email At:
                      </p>
                      <p className="d-block fwMedium">
                        <a href="topdevking@gmail.com">topdevking@gmail.com</a>
                      </p>
                    </aside>
                  </div>
                  <div className="col-12 colXlDiv4">
                    <aside
                      className="pfbColumn position-relative w-100 text-white rounded-lg pt-10 px-4 pb-4 mb-6 wow fadeInUp"
                      data-wow-delay="2s"
                    >
                      <img
                        src="assets/image/phone.jpg"
                        className="position-absolute bg-orange rounded-circle d-flex align-items-center justify-content-center text-white icn wow bounceIn"
                        data-wow-delay="2.5s"
                        alt=''
                      >
                        <span className="sr-only">icon</span>
                      </img>
                      <p className="title d-block font-weight-normal mb-1">
                        Phone
                      </p>
                      <p className="d-block fwMedium">
                        +1 (719)445-8823
                      </p>
                    </aside>
                  </div>
                  <div className="col-12 colXlDiv4">
                    <aside
                      className="pfbColumn position-relative w-100 text-white rounded-lg pt-10 px-4 pb-4 mb-6 wow fadeInUp"
                      data-wow-delay="2.5s"
                    >
                      <img
                        src="assets/image/skype-brands.svg"
                        className="position-absolute bg-orange rounded-circle d-flex align-items-center justify-content-center text-white icn wow bounceIn"
                        data-wow-delay="3s"
                        alt=""
                      >
                        <span className="sr-only">icon</span>
                      </img>
                      <p className="title d-block font-weight-normal mb-1">
                        Skype
                      </p>
                      <p className="d-block fwMedium">
                        <p>live:.cid.34b10c82a1b2c32b</p>
                      </p>
                    </aside>
                  </div>
                  <div className="col-12 colXlDiv4">
                    <aside
                      className="pfbColumn position-relative w-100 text-white rounded-lg pt-10 px-4 pb-4 mb-6 wow fadeInUp"
                      data-wow-delay="3s"
                    >
                      <img
                        src="assets/image/telegram-brands.svg"
                        alt=""
                        className="position-absolute bg-orange rounded-circle d-flex align-items-center justify-content-center text-white icn wow bounceIn"
                        data-wow-delay="3.5s"
                      >
                        <span className="sr-only">icon</span>
                      </img>
                      <p className="title d-block font-weight-normal mb-1">
                        Telegram
                      </p>
                      <p className="d-block fwMedium">
                        <a href="https://t.me/@wk9231" target="">
                          WK
                        </a>
                      </p>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <div className="items-center justify-center flex pt-12">
            <p className="text-3xl text-white contact">Contact Us </p>
          </div>
          <div className="pt-10 pb-12 landing-footer">
            <img
              src={CEO}
              className="ml-auto mr-auto flex icomoon-mail bg-orange pt-5 rounded-[50%] d-flex align-items-center justify-content-center text-white icn wow bounceIn"
              width="200"
              height="200"
              alt=""
              data-wow-delay="2s"
            />
            <p className="mt-10 text-white text-2xl text-center">CEO - Daiana Kurti</p>
            <div className="flex sm:flex-col contract">
              <div className="footer-box flex md:flex-col">
                <div className="flex justify-content-center">
                  <img
                    src={WhatsApp}
                    alt=""
                    width="50"
                    height="50"
                    className="absolute mt-[-40px] rounded-[50%]"
                  />
                  <p className="text-white text-2xl mt-5 ml-10">
                    Whatsapp <br />{" "}
                    <a href="https://wa.me/message/5RD6ZTGKPPULB1">
                      https://wa.me/message/5RD6ZTGKPPULB1
                    </a>
                  </p>
                </div>
              </div>
              <div className="footer-box flex md:flex-col">
                <img
                  src={Linkedin}
                  alt=""
                  width="50"
                  height="50"
                  className="absolute mt-[-40px] rounded-[50%]"
                />
                <div className="flex justify-content-center">
                  <p className="text-white text-2xl mt-5 ml-10">
                    LinkedIn
                    <br />{" "}
                    <a
                      className="text-xl text-white"
                      href="https://www.linkedin.com/in/daiana-kurti-591913139"
                    >
                      https://www.linkedin.com/in/daiana-kurti-591913139
                    </a>
                  </p>
                </div>
              </div>
              <div className="footer-box flex md:flex-col">
                <div className="flex justify-content-center">
                  <img
                    src={Email}
                    alt=""
                    width="50"
                    height="50"
                    className="bg-blue-400 absolute mt-[-40px] rounded-[50%]"
                  />
                  <p className="text-2xl text-white mt-5 ml-40">
                    Main Email
                    <br />
                    <a
                      href="https://neon-languages@neon-l.com"
                      className="text-xl text-white"
                    >
                      neon-languages@neon-l.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="footer-box flex md:flex-col">
                <div className="flex justify-content-center">
                  <img
                    src={Email}
                    alt=""
                    width="50"
                    height="50"
                    className="bg-blue-400 absolute mt-[-40px] rounded-[50%]"
                  />
                  <p className="text-2xl text-white mt-5 ml-40">
                    Support Team Email
                    <br />
                    <a
                      href="https://neon-languages@neon-l.com"
                      className="text-xl text-white"
                    >
                      teamsupport@neon-l.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="footer-box flex md:flex-col">
                <div className="flex justify-content-center">
                  <img
                    src={WhatsApp}
                    alt=""
                    width="50"
                    height="50"
                    className="absolute mt-[-40px] rounded-[50%]"
                  />
                  <p className="text-2xl text-white mt-5 ml-40">
                    Interpreter Line
                    <br />
                    <a className="text-xl text-white">(860)-935-2645</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="main-footer pb-12">
            <div className="footer flex md:flex-col">
              <div className="flex flex-col footer-box">
                <p className="text-white font-bold">Name</p>
                <input
                  value={name}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                  className="border-black text-black bg-white w-[full] lg:mb-0 mb-[15px] outline-none text-xl py-[10px] px-4 rounded-full"
                />
              </div>
              <div className="flex flex-col footer-box">
                <p className="ml-12 text-white font-bold md: ml-0">
                  Company Name
                </p>
                <input
                  value={company}
                  onChange={(e) => setClientCompany(e.target.value)}
                  required
                  className="border-black text-black bg-white w-[full] lg:mb-0 mb-[15px] outline-none text-xl py-[10px] px-4 rounded-full"
                />
              </div>
            </div>
            <div className="footer flex md:flex-col">
              <div className="flex flex-col footer-box">
                <p className="phone text-white font-bold">Phone Number</p>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phone}
                  required
                  className="phone_input border-black text-black bg-white w-[full] lg:mb-0 mb-[15px] outline-none text-xl py-[10px] px-4 rounded-full"
                  onChange={(e: any) => setClientNumber(e)}
                />
              </div>
              <div className="flex flex-col footer-box">
                <p className="email text-white font-bold">Email</p>
                <input
                  value={email}
                  required
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="email_input border-black text-black bg-white w-[full] lg:mb-0 mb-[15px] outline-none text-xl py-[10px] px-4 rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="justify-center flex pb-12">
            <button
              className="h-[40px] border-black rounded-full w-[100px] bg-black text-white"
              onClick={() => sendClientData()}
              disabled={loading === "neon"}
            >
              <span>
                {loading === "neon" && (
                  <img
                    src={svgLoading}
                    alt="loading"
                    className="inline w-4 h-4 mb-1 mr-2 text-white animate-spin"
                  />
                )}
                Send
              </span>
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default FooterPart;
