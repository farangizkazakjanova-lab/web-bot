"use client ";
import { Button, Container, Flex, ScrollArea } from "@mantine/core";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const App_Nav = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useSWR(
    "https://lesson-bot-node.onrender.com/api/categories",
    fetcher
  );

  if (error) return <div>ошибка загрузки</div>;
  if (isLoading) return <div>загрузка...</div>;
  return (
    <>
      <Container py={"xl"}>
        <ScrollArea
          pb={"md"}
          w={"100%"}
          scrollbarSize={2}
          scrollHideDelay={2000}
        >
          {" "}
          <Flex gap={"sm"} miw={"600px"}>
            <Link href={`/`}>
              <Button variant="light">Asosiy Sahifa</Button>
            </Link>

            {data.map((item) => {
              return (
                <Link key={item._id} href={`/category/${item._id}`}>
                  <Button
                    variant={id == item._id ? "filled" : "light"}
                    key={item._id}
                  >
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </Flex>
        </ScrollArea>
      </Container>
    </>
  );
};

export default App_Nav;
