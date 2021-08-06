import style from "../styles/components/PopupReservation.module.css";
import PopupHeader from "./popupComponents/PopupHeaderReservation";
import PopupReservationComponent from "./popupComponents/PopupReservationComponent";

export default function Popup() {
  return (
    <div className={style.popupMenu}>
      <div className={style.popupHeaderReservation}>
        <PopupHeader />
      </div>
      <div className={style.popupComponent}>
        <PopupReservationComponent />
      </div>
    </div>
  );
}
