import React from "react";
import Close from "public/images/icon/viewpointGuidClose.svg";
import Viewpoint from "./Viewpoint";
import styles from "./index.module.scss";
const ViewpointerPage = () => {
  return (
    <div className={styles.viewpointerPage}>
      <div className={styles.container}>
        <h3 className={styles.title}>雙龍七彩吊橋</h3>

        <div className={styles.viewpointContainer}>
          <Viewpoint />
          <Viewpoint />
          <Viewpoint />
          <Viewpoint />
          <Viewpoint data={"AASDADASDASDASDASDASDASDASDSDASD"} />
          <Viewpoint />
          <Viewpoint />
          <Viewpoint />
          <Viewpoint />
        </div>
      </div>
      <div className={styles.close}>
        <img src={Close.src} alt='' />
      </div>
    </div>
  );
};

export default ViewpointerPage;
