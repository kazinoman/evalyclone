import { Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

interface IProps {
  item: string;
}

export const SingleCategory: FC<IProps> = ({ item }) => {
  //   console.log(item);

  return (
    <Link to={`/category/${item}`} className="no-underline text-black">
      <div className="py-4 border rounded-md border-neutral-200 border-solid text-center no-underline">
        <Typography className="no-underline text-black">{item}</Typography>
      </div>
    </Link>
  );
};
