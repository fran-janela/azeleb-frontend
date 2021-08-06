import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import style from "../../styles/components/PopupComponents.module.css";

export default function LoginPopup(props: any) {
  const { logOut, user } = useContext(AuthContext);

  return (
    <div className={style.reservationContainer}>
      <div className={style.loginTag}>Bom dia, {user.name}!</div>
      <div className={style.reservationText}>
        O seu agendamento não está disponível no MVP de autenticação
      </div>
      <div className={style.reservationButtons}>
        <button className={style.blueReservationButton} onClick={logOut}>
          LOGOUT
        </button>
      </div>
    </div>
  );
}
