import style from "../../styles/components/PopupHeader.module.css";
import Image from "next/image";
import PopupLogo from "../../../public/popupLogo.png";
import CloseTab from "../../../public/close.png";

export default function PopupHeader() {
  return (
    <div className={style.containerReservation}>
      <div className={style.logoPopup}>
        <Image src={PopupLogo} />
      </div>
      <div className={style.closePopup}>
        <Image src={CloseTab} />
      </div>
    </div>
  );
}
