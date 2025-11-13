"use client";
import Card_List from "@/components/Card_List/Card_List";
import App_Nav from "@/components/Nav/App_Nav";
import {
  Badge,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Text,
} from "@mantine/core";

import React from "react";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Home_Page = () => {
  const { data, error, isLoading } = useSWR(
    "https://lesson-bot-node.onrender.com/api/products",
    fetcher
  );

  if (error) return <div>ошибка загрузки</div>;
  if (isLoading) return <div>загрузка...</div>;
  return (
    <>
      <App_Nav />
      <Container py={"xl"}>
        <Card_List data={data} />
      </Container>
    </>
  );
};

export default Home_Page;
