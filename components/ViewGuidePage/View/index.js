import React from "react";
import { useRouter } from "next/router";
import dog from "public/images/dog.jpg";
import styles from "./index.module.scss";
const View = ({ data }) => {
  const router = useRouter();
  return (
    <div
      className={styles.view}
      onClick={() => {
        router.push("/test/third");
      }}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={dog.src} alt='' />
      </div>
      <p className={styles.title}>布農族百步蛇的報仇{data}</p>
    </div>
  );
};

export default View;
