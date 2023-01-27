import { type NextPage } from "next";
import Head from "next/head";
import { OrdersBoard } from "../components/order-board/OrdersBoards";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Waiter App Front</title>
      </Head>
      <OrdersBoard />

    </>
  );
};

export default Home;
