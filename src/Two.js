import React, { useState } from "react";
import { Input } from "antd";
import { Button } from "antd";

const MyFun = (props) => {
  const [error, setError] = useState({});
  const [workspace, setWorkspace] = useState({
    workspaceName: "",
    url: "",
  });
  const onHandleChange = (e) => {
    if (error.hasOwnProperty(e.target.name)) {
      delete error[e.target.name];
    }
    setWorkspace({ ...workspace, [e.target.name]: e.target.value });
  };
  const next = () => {
    if (!workspace.workspaceName) {
      return setError({
        workspaceName: "Please Enter Workspace Name",
      });
    }
    props.next(props.current + 1);
  };
  return (
    <div>
      <h1 className="twoHeading">Lets set up a home for all your work</h1>
      <p className="twosecondHead">
        You can always create another workspace later.
      </p>
      <div className="twoform">
        <div className="inputBox">
          <p className="label">Workspace Name</p>
          <Input
            className="inputField"
            onChange={onHandleChange}
            name="workspaceName"
            placeholder="Eden"
            value={workspace.workspaceName}
          />
          {error.workspaceName ? (
            <p className="error">{error.workspaceName}</p>
          ) : null}
        </div>
        <div className="inputBox">
          <p className="twolabel label">
            Workspace URL{" "}
            <span style={{ fontWeight: "normal" }}>(optional)</span>
          </p>
          <Input
            addonBefore="www.eden.com/"
            className="inputField"
            onChange={onHandleChange}
            name="displayName"
            placeholder="Example"
            value={workspace.url}
          />
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
