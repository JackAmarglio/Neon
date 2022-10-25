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
    axios.post("http://localhost:5000/neon-data", data).then(() => {
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

            {/* <p>
            <strong>Disclosure:</strong>
            <br />
            <span>
              {
                'BY USING THIS CARD YOU AGREE TO THE TERMS AND CONDITIONS OF THE CARDHOLDER AGREEMENT AND FEE SCHEDULE, IF ANY. This Card is issued by Metropolitan Commercial Bank (Member FDIC) pursuant to a license from Visa U.S.A. Inc. "Metropolitan Commercial Bank" and "Metropolitan" are registered trademarks of Metropolitan Commercial Bank ©2014.'
              }
            </span>
          </p>
          <br />
          <p>
            Please refer to the{" "}
            <a
              href="https://google.com"
              className="text-[#0386ff] hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Avid Prepaid mobile message service terms.
            </a>
            </p>
          <br />
          <p>
            <strong>Notice of Patriot Act:</strong>
            <br />
            <span>
              {
                "Important information for opening a card account: To help the federal government fight the funding of terrorism and money laundering activities, the USA PATRIOT Act requires all financial institutions and their third parties to obtain, verify and record information that identifies each person who opens a card account. What this means for you: When you open a card account, we will ask for your name, address, date of birth, social security number, and other information that will allow us to identify you. We may also request a copy of your driver's license or other documentation bearing your photo as verification of your identity."
              }
            </span>
          </p>
          <br />
          <p>
            <strong>PLEASE NOTE:</strong>
            <br />
            <span>
              {
                "1. How early you receive your payment will depend on your benefit type. The Early Access program from Avid Prepaid allows you to receive your funds when the Government sends notification that it intends to make a payment to you. This varies by month and by government agency, for example SSI and VA Early Access payments are usually made 6 days early and SSA payments that are paid on Wednesdays are usually paid on the preceding Friday or 5 days early. All payments are subject to notification from the Department of Treasury each month and may change any time. Please review the Avid Prepaid Cardholder Agreement for terms and conditions."
              }
              <br />
              {
                "There is an additional charge for the 'Early Access Benefits Direct Deposit feature'. Refer to the Cardholder Agreement's Schedule of Fees and Charges. You are not required to elect this feature on your deposits and can avoid this fee by informing us of your preference to receive your monthly benefits on the original effective date either by calling us at"
              }
              <a
                href="tel:(801) 893-7716"
                className="text-[#0386ff] hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {" (801) 893-7716 "}
              </a>
              or
              <a
                href="tel:(800) 221-6192"
                className="text-[#0386ff] hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {" (800) 221-6192 "}
              </a>
              or by email at:
              <a
                href="mailto:contactus@avidprepaid.com"
                className="text-[#0386ff] hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {" contactus@avidprepaid.com "}
              </a>
              or in writing to:{" "}
              <span className="text-[#0386ff] hover:underline">
                Avid Prepaid, PO Box 307, New Hyde Park, NY 11040.
              </span>
          </span>
          </p>
          <p>
            2. Please refer to the Avid Prepaid Cardholder Agreement for terms and
            conditions. Other fees may apply.
          </p>
          <p>
            3. Account Shield will temporarily restrict the authorization of new
            purchases or withdrawals. Previously authorized transactions and
            deposits or transfers to your account will function with Account
            Shield enabled.
          </p>
          <p>
            4. Create up to four companion accounts with no charge. Usage and
            other fees may apply.
          </p>
          <p>
            5. December 2021 SSI and VA payments were made available to recipients
            on December 1st, 2021 by most banks and Direct Express<sup>®</sup>
          </p>
          <p>6. Activation fee is waived.</p> */}
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
