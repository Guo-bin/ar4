import React from "react";
import rectangle1 from "public/images/rectangle.png";
import arrow from "public/images/icon/arrow.svg";
import bununWarrior from "public/images/icon/bununWarrior.svg";
import dottedLine from "public/images/icon/dottedLine.svg";
import go from "public/images/icon/go.svg";
import rectangle2 from "public/images/rectangle2.png";
import Card from "./Card";
import hundredPaceSnake from "public/images/icon/hundredPaceSnake.svg";
import shootingSun from "public/images/icon/shootingSun.svg";
import flood from "public/images/icon/flood.svg";
import styles from "./index.module.scss";

const data = [
  {
    arrow,
    dottedLine,
    cardTitle: "布農族勇士傳說",
    backgroundImg: rectangle1,
    picture: bununWarrior,
  },
  {
    arrow,
    dottedLine,
    cardTitle: "布農族百步蛇的報仇",
    backgroundImg: rectangle2,
    picture: hundredPaceSnake,
  },
  {
    arrow,
    dottedLine,
    cardTitle: "布農族射日英雄傳說",
    backgroundImg: rectangle1,
    picture: shootingSun,
  },
  {
    arrow,
    dottedLine,
    cardTitle: "布農族洪水傳說",
    backgroundImg: rectangle2,
    picture: flood,
    finial: true,
  },
];
const Entry = () => {
  return (
    <div className={styles.entry}>
      <h4 className={styles.title}>歡迎來到雙龍部落</h4>
      <p className={styles.description}>
        雙龍部落有很多歷史人文景觀，等待你來探險，讓我們看看有哪些景點吧！
      </p>
      <img className={styles.go} src={go.src} alt='' />
      <div className={styles.container}>
        {data &&
          data.map((data, index) => {
            if ((index + 2) % 2 == 0) {
              return <Card data={data} classname='right' />;
            } else {
              return <Card data={data} classname='left' />;
            }
          })}
      </div>
    </div>
  );
};

export default Entry;
