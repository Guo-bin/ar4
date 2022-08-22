/* eslint-disable @next/next/no-img-element */
import React from "react";
// import InstructionPage from "./InstructionPage";
import icon from "public/icon/instruction.svg";
import styles from "./index.module.scss";
const Instruction = () => {
  return (
    <div className={styles.instruction}>
      <img className={styles.icon} src={icon.src} alt='' />
      <p className={styles.title}>操作介紹</p>
      {/* <InstructionPage /> */}
    </div>
  );
};

export default Instruction;
