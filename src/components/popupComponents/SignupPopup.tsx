import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import style from "../../styles/components/PopupComponents.module.css";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function SignupPopup(props: any) {
  const { register, handleSubmit } = useForm();
  const { signUp } = useContext(AuthContext);

  async function signUpSubmit(data: any) {
    console.log(data);
    await signUp(data);
  }

  return (
    <div className={style.signupContainer}>
      <div className={style.signupTag}>CADASTRO</div>
      <div className={style.signupInputs}>
        <div className={style.signupInput}>
          <label className={style.signupLabels} htmlFor="name">
            Email
          </label>
          <input
            {...register("username")}
            className={style.signupInputBox}
            id="username"
            name="username"
            type="username"
            required
          />
        </div>
        <div className={style.signupInput}>
          <label className={style.signupLabels} htmlFor="password">
            Senha
          </label>
          <input
            {...register("password")}
            className={style.signupInputBox}
            id="password"
            name="password"
            type="password"
            required
          />
        </div>
        <div className={style.signupInput}>
          <label className={style.signupLabels} htmlFor="name">
            Nome Completo
          </label>
          <input
            {...register("name")}
            className={style.signupInputBox}
            id="name"
            name="name"
            type="name"
            required
          />
        </div>
        <div className={style.signupInput}>
          <label className={style.signupLabels} htmlFor="telephone">
            Celular
          </label>
          <input
            {...register("phone")}
            className={style.signupInputBox}
            id="phone"
            name="phone"
            type="phone"
            required
          />
        </div>
        <div className={style.signupInput}>
          <label className={style.signupLabels} htmlFor="CPF">
            CPF
          </label>
          <input
            {...register("cpf")}
            className={style.signupInputBox}
            id="cpf"
            name="cpf"
            type="cpf"
            required
          />
        </div>
        <div className={style.signupInput}>
          <label className={style.signupLabels} htmlFor="CEP">
            CEP
          </label>
          <input
            {...register("cep")}
            className={style.signupInputBox}
            id="cep"
            name="cep"
            type="cep"
            required
          />
        </div>
        <div className={style.signupInput}>
          <label className={style.signupLabels} htmlFor="birthday">
            Data de Nascimento
          </label>
          <input
            {...register("birthday")}
            className={style.signupInputBox}
            id="birthday"
            name="birthday"
            type="date"
            required
          />
        </div>
        <div className={style.signupInput}>
          <label className={style.signupLabels} htmlFor="Gender">
            Gênero
          </label>
          <select {...register("gender")} className={style.signupInputBox}>
            <option value="Male">Masculino</option>
            <option value="Female">Feminino</option>
            <option value="Others">Outros</option>
          </select>
        </div>
      </div>
      <div className={style.sigupButtons}>
        <button
          className={style.whiteSignupButton}
          onClick={props.onRegisterBack}
        >
          VOLTAR
        </button>
        <button
          className={style.blueSignupButton}
          onClick={handleSubmit(signUpSubmit)}
        >
          CADASTRAR
        </button>
      </div>
    </div>
  );
}
