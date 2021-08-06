import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import style from "../../styles/components/PopupComponents.module.css";

export default function LoginPopup(props: any) {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  async function handleSignIn(data: any) {
    await signIn(data);
  }
  return (
    <div className={style.loginContainer}>
      <div className={style.loginTag}>LOGIN</div>
      <div className={style.loginInputs}>
        <div className={style.loginInput}>
          <label className={style.loginLabels} htmlFor="name">
            Email
          </label>
          <input
            {...register("username")}
            className={style.loginInputBox}
            id="username"
            name="username"
            type="username"
            required
          />
        </div>
        <div className={style.loginInput}>
          <label className={style.loginLabels} htmlFor="password">
            Senha
          </label>
          <input
            {...register("password")}
            className={style.loginInputBox}
            id="password"
            name="password"
            type="password"
            required
          />
        </div>
      </div>
      <div className={style.loginButtons}>
        <button
          className={style.blueButton}
          onClick={handleSubmit(handleSignIn)}
        >
          ENTRAR
        </button>
        <button className={style.whiteButton} onClick={props.onRegisterSignup}>
          CADASTRAR
        </button>
      </div>
    </div>
  );
}
