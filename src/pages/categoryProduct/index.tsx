import { FC } from "react";
import { useParams } from "react-router-dom";
interface IProps {}

// API
import { useGetCategoryProducts } from "@/services/products";

const CategoryProduct: FC<IProps> = (props) => {
  const { slag } = useParams();
  // console.log(slag);
  const { data } = useGetCategoryProducts(slag);
  console.log(data);

  return <div>Product from specific category.</div>;
};
export default CategoryProduct;
