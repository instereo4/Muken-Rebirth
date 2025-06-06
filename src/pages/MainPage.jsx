import styles from "../styles/mainpage.module.css";
import { useState } from "react";

export default function MainPage() {
  return (
    <>
      <main className="fadeInUp">
        <div className={styles.rebirthContainer}>
          <div className={styles.dashSubTitle}></div>
          <h1 className="mainPageText">Rebirth</h1>
          <div className={styles.dashSubTitle}></div>
        </div>
        <h4 className="mainPageText">pvp battle arena & battle royale</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "auto",
            flexWrap: "wrap",
          }}
        ></div>
      </main>
    </>
  );
}
