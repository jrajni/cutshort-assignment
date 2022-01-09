import React, { useState } from "react";
import { Input } from "antd";
import { Button } from "antd";
const MyFun = (props) => {
  const [error, setError] = useState({});
  const [nameFields, setNameFields] = useState({
    fullName: "",
    displayName: "",
  });
  const onHandleChange = (e) => {
    if (error.hasOwnProperty(e.target.name)) {
      delete error[e.target.name];
    }

    setNameFields({ ...nameFields, [e.target.name]: e.target.value });
  };
  const next = () => {
    if (!nameFields.fullName) {
      return setError({
        fullName: "Please Enter Full Name",
      });
    } else if (!nameFields.displayName) {
      return setError({
        displayName: "Please Enter Display Name",
      });
    }
    props.next(props.current + 1);
  };
  return (
    <div>
      <h1 className="oneHeading">Welcome! First things first...</h1>
      <p className="secondHead">You can always change them later.</p>
      <div className="oneform">
        <div className="inputBox">
          <p className="label">Full Name</p>
          <Input
            className={`inputField ${error.fullName ? "error" : ""}`}
            onChange={onHandleChange}
            name="fullName"
            placeholder="Steve Jobs"
            value={nameFields.fullName}
          />
          {error.fullName ? <p className="error">{error.fullName}</p> : null}
        </div>
        <div className="inputBox">
          <p className="label">Display Name</p>
          <Input
            className="inputField"
            onChange={onHandleChange}
            name="displayName"
            placeholder="Steve"
            value={nameFields.displayName}
          />
          {error.displayName ? (
            <p className="error">{error.displayName}</p>
          ) : null}
        </div>
        <div className="steps-action">
          <Button type="primary" onClick={() => next()}>
            Create Workspace
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyFun;
