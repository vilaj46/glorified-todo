import React, { useState } from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import api from "../../../../api.js";

import companySVG from "../../../../svgs/company.svg";

const CompanyInput = ({ username, company, setKey }) => {
  const [companyText, setCompanyText] = useState(company);

  const onChange = (e) => {
    if (e.target.value.trim().length > 0) {
      setCompanyText(e.target.value);
      api.changeKey(username, "company", e.target.value);
      setKey("company", e.target.value);
    }
  };

  return (
    <InputGroup size="sm" className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-sm">
          <img src={companySVG} alt="Company" />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        value={companyText}
        onChange={(e) => onChange(e)}
      />
    </InputGroup>
  );
};

CompanyInput.propTypes = {
  username: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  setKey: PropTypes.func.isRequired,
};

export default CompanyInput;
