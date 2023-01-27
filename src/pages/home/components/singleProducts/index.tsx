import { FC } from "react";
import { IProduct } from "@/pages/home/type";
import { Typography } from "antd";
import { Avatar, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
interface Props {
  data: IProduct;
}

export const SingleProductComponent: FC<Props> = ({ data }) => {
  console.log(data.title);

  return (
    <Link to={`/product/${data.id}`} className="no-underline text-black">
      <div className="bg-white p-2 flex flex-col justify-center items-center  rounded-lg gap-3">
        {/* <Typography className="text-center ">Img</Typography> */}

        <Avatar
          src={data.thumbnail}
          sx={{ width: 150, height: 150 }}
          className="rounded-md py-2"
        ></Avatar>
        <Typography className="text-center truncate text-ellipsis text-sm font-semibold">
          {data.title}
        </Typography>
        <Typography className="font-semibold">{data.price} ৳</Typography>
      </div>
    </Link>
  );
};
