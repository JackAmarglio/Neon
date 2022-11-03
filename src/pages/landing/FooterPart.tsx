import axios from "axios";
import Container from "components/Container";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../../assets/css/App.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input/input'
import { isValidPhoneNumber } from 'react-phone-number-input'


const FooterPart = () => {

  if (window.performance) {
    if (performance.navigation.type == 1) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
  const [email, setClientEmail] = useState("");
  const [name, setClientName] = useState("");
  const [phone, setClientNumber] = useState("");
  const [company, setClientCompany] = useState("");
  const data = {
    email,
    name,
    phone,
    company,
    type: "customer"
  };
  const sendClientData = () => {
    if (email == "") {
      alert("fill email")
      toast("fill email");
      return <ToastContainer />
    }
    if (name == "") {
      alert("fill name")
    }
    if (phone == "") {
      alert("fill phone")
    }
    if (company == "") {
      alert("fill company")
    }
    isValidPhoneNumber(phone) ? 
    axios.post("https://neon-backend.vercel.app/neon/neon-data", data).then((res) => {
      if (res.data.success == true) {
        alert("Successfully sent")
        setClientEmail("");
        setClientName("")
        setClientCompany("")
        setClientNumber("")
      }
    }) : alert("invalid phone number")
  };
  return (
    <div className="footer-part">
      <div className="relative px-10" id="contact">
        <Container>
          <div className="items-center justify-center flex pt-12">
            <strong className="text-3xl text-black contact">Contact Us </strong>
          </div>
          <div className="flex justify-between pt-10 pb-12 landing-footer">
            <div>
              <p className="text-2xl">Main email</p>
              <br />
              <a href="https://neon-languages@neon-l.com" className="text-xl">
                neon-languages@neon-l.com
              </a>
            </div>
            <p>
              <p className="text-2xl support">Support team email</p>
              <br />
              <a href="https://teamsupport@neon-l.com" className="text-xl">
                teamsupport@neon-l.com
              </a>
            </p>
            <div>
              <p className="text-2xl">Interpreter Line</p>
              <br />
              <a href="" className="text-xl">
                (860)-999-7073
              </a>
            </div>
          </div>
          <div className="main-footer pb-12 flex justify-between">
            <div className="footer flex md:flex-col">
              <div className="flex flex-col">
                <p className="text-black">Name</p>
                <input
                  value={name}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                  className="bg-gray-500 w-[full] lg:mb-0 mb-[15px] outline-none text-[#777] text-xl py-[10px] px-4 rounded-full footer-input"
                ></input>
              </div>
              <div className="flex flex-col">
                <p className="ml-12 text-black md: ml-0">Company Name</p>
                <input
                  value={company}
                  onChange={(e) => setClientCompany(e.target.value)}
                  required
                  className="company bg-gray-500 ml-10 w-[full] md:ml-0 lg:mb-0 mb-[15px] outline-none text-[#777] text-xl py-[10px] px-4 rounded-full footer-input"
                ></input>
              </div>
            </div>
            <div className="footer flex md:flex-col">
              <div className="flex flex-col">
                <p className="phone ml-12 text-black">Phone Number</p>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phone}
                  required
                  className="phone_input bg-gray-500 ml-10 w-[full] lg:mb-0 mb-[15px] outline-none text-[#777] text-xl py-[10px] px-4 rounded-full footer-input"
                  onChange={(e:any) => setClientNumber(e)}
                />
              </div>
              <div className="flex flex-col">
                <p className="email ml-12 text-black">Email</p>
                <input
                  value={email}
                  required
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="email_input bg-gray-500 ml-10 w-[full] lg:mb-0 mb-[15px] outline-none text-[#777] text-xl py-[10px] px-4 rounded-full footer-input"
                ></input>
              </div>
            </div>
          </div>
          <div className="justify-center flex pb-12">
            <button className="border border-black rounded-full w-[100px] bg-black text-white" onClick={() => sendClientData()}>
              Send
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default FooterPart;
