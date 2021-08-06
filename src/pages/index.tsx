import Background from "../components/Background";
import Popup from "../components/Popup";
import style from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={style.screenContainer}>
      <div className={style.backgroudItem}>
        <Background />
      </div>
      <div className={style.popupItem}>
        <Popup />
      </div>
    </div>
  );
}
