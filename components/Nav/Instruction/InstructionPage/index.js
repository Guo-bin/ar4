/* eslint-disable @next/next/no-img-element */
import React from "react";
import viewpointGuide from "public/icon/viewpointGuide.svg";
import languageGuide from "public/icon/languageGuide.svg";
import scan from "public/icon/scan.svg";
import viewpointMap from "public/icon/viewpointMap.svg";
import language from "public/icon/language.svg";
import close from "public/icon/close.svg";
import styles from "./index.module.scss";
const InstructionData = [
  {
    icon: viewpointGuide.src,
    title: "景點介紹",
    introduce: "介紹文介紹文介紹文介紹文介紹文介紹文介紹文紹文紹文紹文",
  },
  {
    icon: languageGuide.src,
    title: "族語介紹",
    introduce: "介紹文介紹文介紹文介紹文介紹文介紹文介紹文紹文紹文",
  },
  {
    icon: scan.src,
    title: "掃描",
    introduce: "介紹文介紹文介紹文介紹文介紹文介紹文介紹文紹文",
  },
  {
    icon: viewpointMap.src,
    title: "景點一覽",
    introduce: "介紹文介紹文介紹文介紹文介紹文介紹文介紹文",
  },
  {
    icon: language.src,
    title: "系統語言",
    introduce: "介紹文介紹文介紹文介紹文介紹文介紹文介紹文",
  },
];
const InstructionPage = () => {
  return (
    <div className={styles.instructionPage}>
      <div className={styles.upperSection}>
        <h3 className={styles.title}>操作說明</h3>
        <img className={styles.close} src={close.src} alt='' />
      </div>
      <div className={styles.container}>
        {InstructionData.map((instruction) => (
          <section key={instruction._id} className={styles.section}>
            <img className={styles.icon} src={instruction.icon} alt='' />
            <div className={styles.textArea}>
              <h4 className={styles.instructionTitle}>{instruction.title}</h4>
              <p className={styles.introduce}>{instruction.introduce}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default InstructionPage;
