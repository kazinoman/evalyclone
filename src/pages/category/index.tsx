import { Typography, Container, Grid } from "@mui/material";
import { FC } from "react";
interface IProps {
  item: string;
}

// API
import { useGetAllCategory } from "@/services/products";
import { SingleCategory } from "../home/components/singleCategoryCard";

const Category: FC<IProps> = (props) => {
  const { data, isLoading, isError, error } = useGetAllCategory();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} className="my-5">
        {data?.map((data) => {
          return (
            <Grid item xs={6} sm={4} md={3}>
              <SingleCategory item={data} />
            </Grid>
          );
        })}
      </Grid>
      {/* <Typography> all category</Typography> */}
    </Container>
  );
};
export default Category;
