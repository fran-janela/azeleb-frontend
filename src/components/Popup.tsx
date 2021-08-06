import style from "../styles/components/Popup.module.css";
import PopupHeader from "./popupComponents/PopupHeader";
import LoginPopup from "./popupComponents/LoginPopup";
import SignupPopup from "./popupComponents/SignupPopup";
import { useState } from "react";

export default function Popup() {
  const [popupTag, setPopupTag] = useState("LOGIN");

  function handleOnRegisterSignup() {
    setPopupTag("SIGNUP");
  }

  function handleOnRegisterBack() {
    setPopupTag("LOGIN");
  }

  function PopupContent() {
    if (popupTag == "LOGIN") {
      return <LoginPopup onRegisterSignup={handleOnRegisterSignup} />;
    } else if (popupTag == "SIGNUP") {
      return <SignupPopup onRegisterBack={handleOnRegisterBack} />;
    } else {
      console.log("Popup Tag está com problema!");
    }
  }

  return (
    <div className={style.popupMenu}>
      <div className={style.popupHeader}>
        <PopupHeader />
      </div>
      <div className={style.popupComponent}>{PopupContent()}</div>
    </div>
  );
}
