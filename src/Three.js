import React, { useState } from "react";
import { Card } from "antd";
import User from "./imgs/user.svg";
import { Button } from "antd";
import Team from "./imgs/team.svg";

const MyFun = (props) => {
  const [selectedCard, setSelectedCard] = useState(1);
  const next = () => {
    props.next(props.current + 1);
  };
  return (
    <div>
      <h1 className="threeHeading">How are you planning to use Eden?</h1>
      <p className="thirdHead">
        We'll streamline your setup experience accordingly
      </p>
      <div className="threeform">
        <Card
          className={`card ${selectedCard === 1 ? "card-one" : "card-two"}`}
          onClick={() => setSelectedCard(1)}
          style={{ marginRight: 15 }}
        >
          <img src={User} alt="icon" width={20}></img>
          <p className="card-head">For myself</p>
          <p className="card-text">
            Write better. Think more clearly. Stay Organized.
          </p>
        </Card>
        <Card
          className={`card ${selectedCard === 2 ? "card-one" : "card-two"}`}
          onClick={() => setSelectedCard(2)}
        >
          <img src={Team} alt="icon" width={25}></img>
          <p className="card-head">With my team</p>
          <p className="card-text">
            Wikis, docs, tasks & projects, all in one place.
          </p>
        </Card>
      </div>
      <div className="steps-action" style={{ width: 350 }}>
        <Button type="primary" onClick={() => next()}>
          Create Workspace
        </Button>
      </div>
    </div>
  );
};

export default MyFun;
