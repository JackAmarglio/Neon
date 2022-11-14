import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import "assets/css/App.css";
import { LandingPage } from "pages";
import PhoneNumberContext from "context/PhoneNumber";
import PhoneCodeContext from "context/PhoneCode";

import { ToastContainer } from 'react-toastify';

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneValue = useMemo(
    () => ({ phoneNumber, setPhoneNumber }),
    [phoneNumber]
  );
  const [phoneCode, setPhoneCode] = useState(false);
  const codeValue = useMemo(() => ({ phoneCode, setPhoneCode }), [phoneCode]);
  return (
    <PhoneNumberContext.Provider value={phoneValue}>
      <PhoneCodeContext.Provider value={codeValue}>
        <Router>
          <Route>
            <Redirect to="/"/>
          </Route>
          <Route exact path="/" component={LandingPage} />
        </Router>
        <ToastContainer 
          // position="top-right"
          // autoClose={2000}
          // hideProgressBar={false}
          // newestOnTop={false}
          // closeOnClick
          // rtl={false}
          // pauseOnFocusLoss
          // draggable
          // pauseOnHover
          // theme="colored"
        />
      </PhoneCodeContext.Provider>
    </PhoneNumberContext.Provider>
  );
}

export default App;
