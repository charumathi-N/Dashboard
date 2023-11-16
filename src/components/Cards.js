import React from "react";
import "./Cards.css";
import { CardData } from "../Data/Data.js";
import Card from "./Card/Card.js";

const Cards = () => {
  return (
    <div className="Cards">
      {CardData.map((item, id) => {
        return (
          <div className="parentContainer">
            <Card
              title={item.title}
              color={item.color}
              barValue={item.barValue}
              value={item.value}
              png={item.png}
              series={item.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
