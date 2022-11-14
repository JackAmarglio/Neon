import axios from "axios";
import Container from "components/Container";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/css/App.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input/input";
import { isValidPhoneNumber } from "react-phone-number-input";
import svgLoading from 'assets/image/loading.svg';
import { toast } from 'react-toastify';

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
      axios.post(`${base_url}/neon/neon-data`, data).then((res) => {
        if (res.data.success === true) {
          toast.success('Successfully sent', {
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
      }).catch((e) => {
        console.log(e)
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
          <div className="items-center justify-center flex pt-12">
            <strong className="text-3xl text-white contact">Contact Us </strong>
          </div>
          <div className="flex justify-between pt-10 pb-12 landing-footer">
            <div>
              <p className="text-2xl text-white font-bold">Main email</p>
              <br />
              <a
                href="https://neon-languages@neon-l.com"
                className="text-xl text-white font-bold"
              >
                neon-languages@neon-l.com
              </a>
            </div>
            <p>
              <p className="text-2xl support text-white font-bold">
                Support team email
              </p>
              <br />
              <a
                href="https://teamsupport@neon-l.com"
                className="text-xl text-white font-bold"
              >
                teamsupport@neon-l.com
              </a>
            </p>
            <div>
              <p className="text-2xl text-white font-bold">Interpreter Line</p>
              <br />
              <a href="#" className="text-xl text-white font-bold">
                (860)-935-2645
              </a>
            </div>
          </div>
          <div className="main-footer pb-12 flex justify-between">
            <div className="footer flex md:flex-col">
              <div className="flex flex-col">
                <p className="text-white font-bold">Name</p>
                <input
                  value={name}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                  className="border-black text-white bg-black w-[full] lg:mb-0 mb-[15px] outline-none text-xl py-[10px] px-4 rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <p className="ml-12 text-white font-bold md: ml-0">
                  Company Name
                </p>
                <input
                  value={company}
                  onChange={(e) => setClientCompany(e.target.value)}
                  required
                  className="border-black text-white bg-black w-[full] lg:mb-0 mb-[15px] outline-none text-xl py-[10px] px-4 rounded-full"
                />
              </div>
            </div>
            <div className="footer flex md:flex-col">
              <div className="flex flex-col">
                <p className="phone text-white font-bold">Phone Number</p>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phone}
                  required
                  className="phone_input border-black text-white bg-black w-[full] lg:mb-0 mb-[15px] outline-none text-xl py-[10px] px-4 rounded-full"
                  onChange={(e: any) => setClientNumber(e)}
                />
              </div>
              <div className="flex flex-col">
                <p className="email text-white font-bold">Email</p>
                <input
                  value={email}
                  required
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="email_input border-black text-white bg-black w-[full] lg:mb-0 mb-[15px] outline-none text-xl py-[10px] px-4 rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="justify-center flex pb-12">
            <button
              className="h-[40px] border-black rounded-full w-[100px] bg-black text-white"
              onClick={() => sendClientData()}
              disabled={loading==="neon"}
            >
              <span>
              {loading==='neon'&&<img src={svgLoading} alt="loading" className="inline w-4 h-4 mb-1 mr-2 text-white animate-spin" />}
              Send</span>
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default FooterPart;
