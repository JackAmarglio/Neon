import React, { useContext, useMemo, useState } from "react";
import InputMask from "react-input-mask";
import axios from "axios";
import earlyAccessImg from "assets/image/early-access-icon.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
Modal.setAppElement("#root");

const SignUpForm = (props: any) => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState(3);
  const [email, setEmail] = useState("");
  const [shortForm, setShortForm] = useState(false);
  const [patriotNotice, setPatriotNotice] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneCode, setPhoneCode] = useState(false);
  const [experience, setExperience] = useState("");
  const [lang, setLang] = useState("")
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [address, setAddress] = useState("")

  const generateMobileToken = (number: string) => {
    setPhoneNumber(number);
    if (number.length === 10) {
      axios
        .get(`/da/mobile-token?phone=${number}`)
        .then((response) =>
          response.data.status === "Success"
            ? () => {
                setPhoneCode(true);
              }
            : setPhoneCode(false)
        )
        .catch((err: any) => console.log(err));
      //tmp
      setPhoneCode(true);
    }
  };

  const closeModal = () => {
    props.onClose();
  };

  const credsPreval = () => {
    axios
      .post(`${process.env.REACT_APP_ENDPOINT}/AvidPrepaid/cresPreval`, {
      })
      .then((response: any) => {})
      .catch((err: any) => console.log(err));
  };

  return (
    <div className="relative pointer-events-auto w-full max-w-[600px] mt-0 sm:mt-6 h-full sm:h-auto bg-white text-center sm:text-left sm:bg-transparent">
      <Modal
        isOpen={shortForm}
        shouldCloseOnOverlayClick={true}
        onRequestClose={(e) => {
          setShortForm(false);
        }}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgb(0 0 0 / .33)",
            padding: 0,
          },
          content: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
            maxHeight: "800px",
            maxWidth: "750px",
            background: "white",
            borderRadius: "1.5rem",
          },
        }}
      >
        <div className="text-left p-6 rounded-3xl leading-relaxed">
          <div className="w-full">
            <table className="w-full">
              <thead>
                <tr>
                  <th
                    className="description-header visually-hidden"
                    id="description-header-1"
                    scope="col"
                  >
                    Type of fee
                  </th>
                  <th className="payg-header" id="payg-header-1" scope="col">
                    Avid GO!
                  </th>
                  <th
                    className="monthly-header"
                    id="monthly-header-1"
                    scope="col"
                  >
                    Avid Select
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="description" id="fee-desc-1" scope="row">
                    <b>Plan fee</b>
                  </th>
                  <td
                    className="payg"
                    data-label="Pay-as-you-go plan"
                    headers="fee-desc-1 payg-header-1"
                  >
                    $0
                  </td>
                  <td
                    className="monthly"
                    data-label="Monthly plan"
                    headers="fee-desc-1 monthly-header-1"
                  >
                    $5.95 per mo.
                  </td>
                </tr>
                <tr>
                  <th className="description" id="fee-desc-2" scope="row">
                    <b>Per purchase</b>
                  </th>
                  <td
                    className="payg"
                    data-label="Pay-as-you-go plan"
                    headers="fee-desc-2 payg-header-1"
                  >
                    $1.50*
                  </td>
                  <td
                    className="monthly"
                    data-label="Monthly plan"
                    headers="fee-desc-2 monthly-header-1"
                  >
                    $0
                  </td>
                </tr>
                <tr>
                  <th className="description" id="fee-desc-3" scope="row">
                    <b>ATM withdrawal</b>
                  </th>
                  <td
                    className="payg"
                    data-label="Pay-as-you-go plan"
                    headers="fee-desc-3 payg-header-1"
                  >
                    $3.00
                  </td>
                  <td
                    className="monthly"
                    data-label="Monthly plan"
                    headers="fee-desc-3 monthly-header-1"
                  >
                    $3.00
                  </td>
                </tr>
                <tr>
                  <th className="description" id="fee-desc-5" scope="row">
                    <b>Cash reload</b>
                  </th>
                  <td
                    className="payg"
                    data-label="Pay-as-you-go plan"
                    headers="fee-desc-5 payg-header-1"
                  >
                    $2.00
                  </td>
                  <td
                    className="monthly"
                    data-label="Monthly plan"
                    headers="fee-desc-5 monthly-header-1"
                  >
                    $2.00
                  </td>
                </tr>
                <tr>
                  <th className="description" id="fee-desc-6" scope="row">
                    ATM balance inquiry
                  </th>
                  <td
                    className="payg"
                    data-label="Pay-as-you-go plan"
                    headers="fee-desc-6 payg-header-1"
                  >
                    $0.75
                  </td>
                  <td
                    className="monthly"
                    data-label="Monthly plan"
                    headers="fee-desc-6 monthly-header-1"
                  >
                    $0.75
                  </td>
                </tr>
                <tr>
                  <th className="description" id="fee-desc-8" scope="row">
                    Live customer service (per call)
                  </th>
                  <td
                    className="payg"
                    data-label="Pay-as-you-go plan"
                    headers="fee-desc-8 payg-header-1"
                  >
                    $0
                  </td>
                  <td
                    className="monthly"
                    data-label="Monthly plan"
                    headers="fee-desc-8 monthly-header-1"
                  >
                    $0
                  </td>
                </tr>
                <tr>
                  <th className="description" id="fee-desc-9" scope="row">
                    Inactivity (after 90 days w/ no trans.)
                  </th>
                  <td
                    className="payg"
                    data-label="Pay-as-you-go plan"
                    headers="fee-desc-9 payg-header-1"
                  >
                    $4.95 per mo.
                  </td>
                  <td
                    className="monthly"
                    data-label="Monthly plan"
                    headers="fee-desc-9 monthly-header-1"
                  >
                    $4.95 per mo.
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full text-left mt-6">
              <p>
                <b>
                  <span>We charge 6 other types of fees. </span>
                </b>
                <span>Here is 1 of them:</span>
              </p>
              <tbody>
                <tr>
                  <th className="description" id="fee-desc-10" scope="row">
                    Early Access
                  </th>
                  <td
                    className="payg"
                    data-label="Pay-as-you-go plan"
                    headers="fee-desc-10 payg-header-2"
                  >
                    $3.00
                  </td>
                  <td
                    className="monthly"
                    data-label="Monthly plan"
                    headers="fee-desc-10 monthly-header-2"
                  >
                    $3.00
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="w-full text-sm">
              <p className="footnote">
                * This fee can be lower depending on how and where this card is
                used.
              </p>
              <p>
                <strong>
                  <span>No overdraft/credit feature.</span>
                </strong>
                <br />{" "}
                <span>
                  Your funds are eligible for FDIC insurance and other
                  protections.
                </span>
              </p>
              <p>
                <span>
                  For general information about prepaid accounts, visit
                </span>{" "}
                <a
                  href="http://www.consumerfinance.gov/prepaid/"
                  rel="noreferrer"
                  target="_blank"
                >
                  cfpb.gov/prepaid
                </a>
                .<br />{" "}
                <span>
                  Find details and conditions for all fees and services in the
                  long form disclosure, or call
                </span>
                <a href="tel:8002216192"> 800-221-6192</a> or visit{" "}
                <a
                  href="https://lf.avidprepaid.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  lf.avidprepaid.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={patriotNotice}
        shouldCloseOnOverlayClick={true}
        onRequestClose={(e) => {
          setPatriotNotice(false);
        }}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgb(0 0 0 / .33)",
            padding: 0,
          },
          content: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
            maxHeight: "250px",
            maxWidth: "750px",
            background: "white",
            borderRadius: "1.5rem",
          },
        }}
      >
        <p>
          To help the federal government fight the funding of terrorism and
          money laundering activities, the USA PATRIOT Act requires all
          financial institutions and their third parties to obtain, verify and
          record information that identifies each person who opens a card
          account. What this means for you: When you open a card account, we
          will ask for your name, address, date of birth, social security
          number, and other information that will allows us to identify you. We
          may also request a copy of your driver's license or other
          documentation bearing your photo as verification of your identity.
        </p>
      </Modal>
      <div className="p-6 sm:p-0 sm:pb-20 sm:mb-0 mb-8">
        <div className="contact-tab-header text-sm sm:text-base bg-white border-b-2 sm:border-b-0 border-blue-100 sm:bg-transparent fixed top-0 sm:relative z-[9999] sm:w-auto flex pt-8 sm:pt-0 pb-2 sm:pb-0">
          <div
            onClick={() => setTab(3)}
            className={`cursor-pointer font-bold sm:bg-white px-4 pl-0 sm:pl-6 sm:px-6 py-4 rounded-tl-3xl ${
              tab === 3 ? "text-blue-500" : "text-gray-600"
            }`}
          >
            <p>Interpreter</p>
          </div>
          <div
            onClick={() => setTab(1)}
            className={`cursor-pointer font-bold sm:bg-white px-4 sm:px-6 py-4 sm:pl-0 rounded-tr-3xl ${
              tab === 1 ? "text-blue-500" : "text-gray-600"
            }`}
          >
            <p>Client</p>
          </div>
          <div
            onClick={() => {
              closeModal();
            }}
            className={`cursor-pointer font-bold px-4 sm:px-6 py-4 sm:pl-0`}
          >
            <p className="text-red-400 sm:text-white absolute right-1 sm:right-2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
              </svg>
            </p>
          </div>
        </div>
        <div className="contact-tab-body text-left relative sm:shadow-2xl pt-24 sm:p-6 bg-white">
          <div
            className={`flex md:flex-row flex-col ${
              tab === 1 ? "opacity-100 block" : "opacity-0 hidden"
            }`}
          >
            <div className="flex flex-col md:w-[50%] w-full md:mr-4 md:mb-0 mr-0">
              <p className="flex items-center mb-4">
                <FaPhoneAlt fill="#0386ff" size={20} />
                <span className="ml-3 text-base">
                  <strong>{"Phone"}</strong>{" "}
                  <input
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="border-2 border-blue-100 w-full lg:mb-0 mb-[15px] outline-none bg-white text-[#777] text-xl py-[10px] px-4 rounded-full"
                  ></input>
                </span>
              </p>
              <p className="flex items-center mb-4">
                <HiMail fill="#0386ff" size={20} />
                <span className="ml-3 text-base">
                  <a
                    href="tel:(801) 893-7716"
                    className="text-[#0386ff] hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"Email Us"}
                  </a>
                  <input
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="border-2 border-blue-100 w-full lg:mb-0 mb-[15px] outline-none bg-white text-[#777] text-xl py-[10px] px-4 rounded-full"
                  ></input>
                </span>
              </p>
            </div>
            <div className="flex flex-col md:w-[50%] w-full md:mr-4 md:mb-0 mr-0 mb-4">
              <p className="mb-4">
                <strong>{"Name"}</strong>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="border-2 border-blue-100 w-full lg:mb-0 mb-[15px] outline-none bg-white text-[#777] text-xl py-[10px] px-4 rounded-full"
                />
              </p>
              <div className="flex justify-between mt-5">
                <button
                  className="bg-blue-500 w-[45%] text-white rounded-full py-3 text-[1.2em]"
                  onClick={() => {
                  }}
                >
                  {/* <FaAngleLeft className="mr-2 inline-block" /> */}
                  Cancel
                </button>
                <button
                  className="bg-blue-500 w-[45%] text-white rounded-full py-3 text-[1.2em]"
                  onClick={() => {
                  }}
                >
                  Save
                  {/* <FaAngleRight className="ml-2 inline-block" /> */}
                </button>
              </div>
              {/* <p className="flex text-[20px]">
                <FaFacebookF fill="#0386ff" />
                <FaInstagram fill="#0386ff" className="ml-4" />
                <FaYoutube fill="#0386ff" className="ml-4" />
              </p> */}
            </div>
          </div>
          <div
            className={`text-left ${
              tab === 2 ? "opacity-100 block" : "opacity-0 hidden"
            }`}
          >
            <p className="mb-[20px] text-base">
              <strong>
                Are you an existing or returning customer and need access to
                your account?
              </strong>{" "}
              <a
                href="https://google.com"
                className="text-[#0386ff] hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Sign In
              </a>
            </p>
            <p className="text-base">
              <strong>Do you want to learn more? </strong>
              <a href="#fap" className="text-[#0386ff] hover:underline">
                Learn More
              </a>
            </p>
          </div>
          {tab === 3 && (
            <div className="w-full h-full">
                <div className="bg-white">
                  <div className="">
                  </div>
                </div>
              <div>
                <div>
                  <div>
                    <div className="flex flex-row gap-5 text-sm border-b-2 border-blue-100 pb-6 mb-6">
                      <img
                        src={earlyAccessImg}
                        alt="cardImg"
                        className="h-[100px] m-auto"
                      />
                      <div>
                        <ul>
                          <li className="pb-2">
                            Welcome to visit here as Interpreter
                          </li>
                          <li>
                            You need to put all your personal data below.
                            After we check your data, we will contact you.
                            Good luck
                          </li>
                        </ul>
                      </div>
                    </div>
                    <br />
                    <input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Full Name"
                      className="border-2 border-blue-100 w-full lg:mb-0 mb-[15px] outline-none bg-white text-[#777] text-xl py-[10px] px-4 rounded-full"
                    />
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="border-2 border-blue-100 w-full lg:mb-0 mb-[15px] mt-5 outline-none bg-white text-[#777] text-xl py-[10px] px-4 rounded-full"
                    />
                    <input
                      value={lang}
                      onChange={(e) => setLang(e.target.value)}
                      placeholder="Language"
                      className="border-2 border-blue-100 w-full lg:mb-0 mb-[15px] mt-5 outline-none bg-white text-[#777] text-xl py-[10px] px-4 rounded-full"
                    />
                    <input
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      placeholder="Experience"
                      className="border-2 border-blue-100 w-full lg:mb-0 mb-[15px] mt-5 outline-none bg-white text-[#777] text-xl py-[10px] px-4 rounded-full"
                    />
                    <InputMask
                      value={phoneNumber}
                      placeholder="Enter Mobile Number"
                      onChange={(e) =>
                        generateMobileToken(
                          String(e.target.value).replace(/[^0-9]/g, "")
                        )
                      }
                      mask="(999) 999-9999"
                      className="border-2 border-blue-100 w-full lg:mb-0 mb-[15px] mt-5 outline-none bg-white text-[#777] text-xl py-[10px] px-4 rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-10">
                <button
                  className="bg-blue-500 w-[150px] text-white rounded-full py-3 text-[1.2em]"
                  onClick={() => {
                  }}
                >
                  {/* <FaAngleLeft className="mr-2 inline-block" /> */}
                  Cancel
                </button>
                <button
                  className="bg-blue-500 w-[150px] text-white rounded-full py-3 text-[1.2em]"
                  onClick={() => {
                  }}
                >
                  Save
                  {/* <FaAngleRight className="ml-2 inline-block" /> */}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
