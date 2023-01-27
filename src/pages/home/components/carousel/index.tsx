import React, { FC } from "react";
import { Carousel } from "antd";

interface IProps {}

export const CarouselCom: FC = () => {
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "300px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <Carousel>
      <div className="mt-0">
        <h3 style={contentStyle}>1</h3>
      </div>
      <div className="mt-0">
        <h3 style={contentStyle}>2</h3>
      </div>
    </Carousel>
  );
};
