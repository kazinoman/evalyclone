import { FC, useEffect } from "react";
import nProgress from "nprogress";

const NProgress: FC = () => {
  useEffect(() => {
    nProgress.start();
    console.log("n is run.");

    return () => {
      nProgress.done(true);
      console.log("n is done..");
    };
  });

  return <></>;
};
export default NProgress;
