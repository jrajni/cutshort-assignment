import React from "react";
import { Result, Button } from "antd";
const Four = (props) => {
  const next = () => {
    // props.next(1);
  };
  return (
    <div style={{ width: 350 }}>
      <Result
        status="success"
        title="Congratulations, Eden!"
        subTitle="You have Completed onboarding, you can start using the Eden!"
      />
      <div className="steps-action" style={{ width: 350 }}>
        <Button type="primary" onClick={() => next()}>
          Launch Eden
        </Button>
      </div>
    </div>
  );
};

export default Four;
