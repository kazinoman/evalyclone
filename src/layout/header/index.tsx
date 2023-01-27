import React from "react";
import { Layout, Input, Typography, Button, Divider } from "antd";
import { Link } from "react-router-dom";

import { Mui } from "@/components/muiComponent";

// icons
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";

const { Header } = Layout;
const HeaderCom = () => {
  return (
    <Header
      className="w-full py-1 shadow z-30 overflow-hidden bg-white "
      style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}
    >
      <div className="max-w-6xl flex flex-row align-middle  mx-auto py-3">
        <Typography className="text-center text-xl py-3">Evaly</Typography>
        <div className="flex flex-row items-center justify-center flex-grow mx-5">
          <Input
            className="w-80 rounded-none flex-grow shadow-none"
            allowClear
            size="large"
            placeholder="Search in Evaly"
          />
          <Button
            icon={<BiSearch />}
            size="large"
            className="w-16  rounded-none bg-black text-white text-xl "
          />
        </div>
        <Mui.Button
          startIcon={<AiOutlineShoppingCart />}
          size="large"
          className="h-auto  rounded-none mx-6 border-transparent bg-transparent text-3xl "
        />
        <Mui.Button
          startIcon={<FaRegUser />}
          disableElevation
          disableRipple
          className="p-0 "
        >
          login
        </Mui.Button>
      </div>
    </Header>
  );
};

export default React.memo(HeaderCom);

export const ButtomHeader = () => {
  return (
    <Header
      style={{ position: "sticky", top: 84, width: "100%" }}
      className="w-full py-3 shadow z-30 overflow-hidden bg-white "
    >
      <Divider className="m-0" />
      <div className="max-w-6xl mx-auto flex flex-row gap-5 pt-3">
        <Mui.Button component={Link} to="/">
          Home
        </Mui.Button>
        <Mui.Button component={Link} to="/category">
          Shop
        </Mui.Button>
      </div>
    </Header>
  );
};
