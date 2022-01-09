import { Steps } from "antd";
import "antd/dist/antd.css";
import React from "react";
import "./App.css";
import Four from "./Four";
import Img from "./imgs/logo.png";
import "./index.css";
import One from "./One";
import Three from "./Three";
import Two from "./Two";
const { Step } = Steps;

const App = () => {
  const [current, setCurrent] = React.useState(0);
  const steps = [
    {
      title: "1",
      content: (
        <One
          current={current}
          next={(val) => {
            setCurrent(val);
          }}
        />
      ),
      icon: 1,
    },
    {
      title: "2",
      content: (
        <Two
          current={current}
          next={(val) => {
            setCurrent(val);
          }}
        />
      ),
      icon: 2,
    },
    {
      title: "3",
      content: (
        <Three
          current={current}
          next={(val) => {
            setCurrent(val);
          }}
        />
      ),
      icon: 3,
    },
    {
      title: "4",
      content: <Four current={current} />,
      icon: 4,
      btnName: "Launch Eden",
    },
  ];

  return (
    <div className="Fragment">
      <h1 className="app-heading">
        <img src={Img} alt="logo" width={40} style={{ marginBottom: 8 }}></img>
        Eden
      </h1>
      <Steps
        current={current}
        direction="horizontal"
        className="stepper "
        size="small"
      >
        {steps.map((item) => (
          <Step key={item.title} icon={item.icon} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
    </div>
  );
};
export default App;
