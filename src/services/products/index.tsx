/**
 * TODO:
 *  1. get all products.
 *  2. get single product.
 *  3. get category.
 *  4. get category oriented product.
 *
 */
import { axiosBase } from "@/config/axiosConfig";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// GET all category.
const getAllCategory = () => {
  return axiosBase.get("/products/categories");
};
export const useGetAllCategory = () => {
  return useQuery(["categories"], getAllCategory, {
    select: (data) => data.data,
  });
};

// GET specific categories products
const getCategoryProducts = ({ queryKey }) => {
  const cname = queryKey[1];
  console.log(cname);
  return axiosBase.get(`/products/category/${cname}`);
};
export const useGetCategoryProducts = (cName: string) => {
  return useQuery(["category", cName], getCategoryProducts, {
    select: (data) => data.data,
  });
};

// GET all Products

const getAllProducts = () => {
  return axiosBase.get("/products?limit=12");
};
export const useGetAllProducts = () => {
  return useQuery(["all-products"], getAllProducts, {
    select: (data) => data.data,
  });
};
