import "./SignUp.css";
import { useState } from "react";
import { VolunteerForm, DisabledForm, CharityInstForm } from './Forms';
import * as _ from "lodash";

const SignUp = function () {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let FormType = params.get("type");
  const [formType, setFormType] = useState(FormType);


  const renderFormType = () => {
    if (formType == 0) {
      return <VolunteerForm />;
    } else if (formType == 1) {
      return <DisabledForm />;
    } else if (formType == 2) {
      return <CharityInstForm />;
    }
  };
  return (
    <div
      className="Body"
    >
      <div className="sign-up-form">{renderFormType()}</div>
    </div>
  );
};
export default SignUp;
