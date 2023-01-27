import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { CarouselCom } from "./components/carousel";
import { SingleCategory } from "@/pages/home/components/singleCategoryCard";
import { SingleProductComponent } from "@/pages/home/components/singleProducts";

// TYPE
import { IProduct } from "@/pages/home/type";

// API
import { useGetAllCategory, useGetAllProducts } from "@/services/products"; // Get Category, products

const Home = () => {
  const { data, isLoading, isError, error } = useGetAllCategory();
  const {
    data: Products,
    isLoading: ProductsLoading,
    isError: ProductsError,
    error: ProductsErrorMessage,
  } = useGetAllProducts();
  // console.log(Products);

  return (
    <Container
      maxWidth="100vw"
      sx={{ bgcolor: (theme) => theme.palette.primary.light }}
      disableGutters
    >
      <Container maxWidth="lg">
        <CarouselCom />
        {/* Category section */}
        <div className=" py-3 flex flex-row justify-between">
          <Typography className="font-semibold text-lg">Category</Typography>
          <Button
            className="rounded-3xl "
            variant="contained"
            size="small"
            component={Link}
            to="/category"
          >
            Show More
          </Button>
        </div>
        <Grid container spacing={1} className="py-2">
          {data?.slice(0, 12).map((data: string, id: number) => (
            <Grid item xs={6} sm={3} md={3} lg={2}>
              <SingleCategory item={data} key={id} />
            </Grid>
          ))}
        </Grid>
        {/* Some Products */}
        <div className="py-3 flex flex-row justify-between">
          <Typography className="font-semibold text-lg">Products</Typography>
          <Button
            className="rounded-3xl "
            variant="contained"
            size="small"
            component={Link}
            to="/products"
          >
            Show More
          </Button>
        </div>
        <Grid container spacing={2}>
          {Products?.products.map((data: IProduct, index: number) => {
            console.log(data);

            return (
              <Grid item xs={6} sm={4} lg={3} key={index}>
                <SingleProductComponent data={data} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Container>
  );
};

export default Home;
