import React from "react";
import Background from "../components/Background";
import Popup from "../components/Popup";
import style from "../styles/pages/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <div className={style.screenContainer}>
      <Head>
        <title>Azeleb</title>
      </Head>
      <div className={style.backgroudItem}>
        <Background />
      </div>
      <div className={style.popupItem}>
        <Popup />
      </div>
    </div>
  );
}
