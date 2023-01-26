import { FC } from "react";
interface INotFoundProps {}

const NotFound: FC<INotFoundProps> = (props) => {
  return (
    <div>
      <h2>Page not found.</h2>
    </div>
  );
};

export default NotFound;
