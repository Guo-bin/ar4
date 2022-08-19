import React, { useEffect } from "react";
import Nav from "components/Nav";
import ViewpointGuidPage from "components/Nav/ViewpointGuide/ViewpointGuidPage";
import styles from "./index.module.scss";
const Home = () => {
  return (
    <div className={styles.home}>
      {/* <ViewpointGuidPage /> */}
      <Nav />
    </div>
  );
};

export default Home;
