import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import Background from "../components/Background";
import PopupReservation from "../components/PopupReservation";
import { getAPIClient } from "../services/axios";
import style from "../styles/pages/Reservation.module.css";
import Head from "next/head";

export default function Reservation() {
  return (
    <div className={style.screenContainerReservation}>
      <Head>
        <title>Azeleb</title>
      </Head>
      <div className={style.backgroudItem}>
        <Background />
      </div>
      <div className={style.popupItem}>
        <PopupReservation />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const { ["nextAuth.accessToken"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  // await apiClient.get('/users')

  return {
    props: {},
  };
};
