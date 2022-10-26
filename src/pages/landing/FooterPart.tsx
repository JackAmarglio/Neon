import axios from "axios";
import Container from "components/Container";
import { useState } from "react";
import { toast } from "react-toastify";
import "../../assets/css/App.css";

const FooterPart = () => {
  const [clientEmail, setClientEmail] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientNumber, setClientNumber] = useState("");
  const [clientCompany, setClientCompany] = useState("");

  const data = {
    clientEmail,
    clientName,
    clientNumber,
    clientCompany,
    type: "customer"
  };
  const sendClientData = () => {
    axios.post("https://neon-backend.vercel.app/neon-data", data).then(() => {
      toast("Successfully sent");
    });
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
              <p className="text-2xl">Company Number</p>
              <br />
              <a href="" className="text-xl">
                8609997073
              </a>
            </div>
          </div>
          <div className="main-footer pb-12 flex justify-between">
            <div className="footer flex md:flex-col">
              <div className="flex flex-col">
                <p className="text-black">Name</p>
                <input
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="bg-gray-500 w-[full] lg:mb-0 mb-[15px] outline-none text-[#777] text-xl py-[10px] px-4 rounded-full footer-input"
                ></input>
              </div>
              <div className="flex flex-col">
                <p className="ml-12 text-black md: ml-0">Company Name</p>
                <input
                  value={clientCompany}
                  onChange={(e) => setClientCompany(e.target.value)}
                  className="company bg-gray-500 ml-10 w-[full] md:ml-0 lg:mb-0 mb-[15px] outline-none text-[#777] text-xl py-[10px] px-4 rounded-full footer-input"
                ></input>
              </div>
            </div>
            <div className="footer flex md:flex-col">
              <div className="flex flex-col">
                <p className="phone ml-12 text-black">Phone Number</p>
                <input
                  value={clientNumber}
                  onChange={(e) => setClientNumber(e.target.value)}
                  className="phone_input bg-gray-500 ml-10 w-[full] lg:mb-0 mb-[15px] outline-none text-[#777] text-xl py-[10px] px-4 rounded-full footer-input"
                ></input>
              </div>
              <div className="flex flex-col">
                <p className="email ml-12 text-black ">Email</p>
                <input
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="email_input bg-gray-500 ml-10 w-[full] lg:mb-0 mb-[15px] outline-none text-[#777] text-xl py-[10px] px-4 rounded-full footer-input"
                ></input>
              </div>
            </div>
          </div>
          <div className="justify-center flex pb-12">
            <button className="text-black" onClick={() => sendClientData()}>
              Send
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default FooterPart;
