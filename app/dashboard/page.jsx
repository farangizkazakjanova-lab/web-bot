"use client";
import Dash_CardList from "@/components/Card_List/Dash_CardList";
import Dash_Nav from "@/components/Nav/Dash_Nav";
import { Container } from "@mantine/core";
import React from "react";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const DashBoard_page = () => {
  const { data, error, isLoading } = useSWR(
    `https://web-bot-node-4kx7.onrender.com/api/products`,
    fetcher
  );

  if (error) return <div>ошибка загрузки</div>;
  if (isLoading) return <div>загрузка...</div>;
  return (
    <>
      <Container py={"xl"}>
        <Dash_Nav />
        <Dash_CardList data={data} />
      </Container>
    </>
  );
};

export default DashBoard_page;
