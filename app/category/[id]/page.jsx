"use client";
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
import { useParams } from "next/navigation";

import React from "react";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const CategoryId_page = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useSWR(
    `https://lesson-bot-node.onrender.com/api/products/category/${id}`,
    fetcher
  );

  if (error) return <div>ошибка загрузки</div>;
  if (isLoading) return <div>загрузка...</div>;
  return (
    <>
      <App_Nav />
      <Container py={"xl"}>
        <Grid gutter={"xl"}>
          {data.map((item) => {
            return (
              <Grid.Col key={item._id} span={{ xl: 4, base: 12, md: 6, lg: 3 }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section component="a" href="https://mantine.dev/">
                   <Image
                                     src={
                                       item.image ||
                                       "https://autodecore.ru/wa-data/public/shop/products/53/63/16353/images/28185/28185.750x0.JPG"
                                     }
                                     height={160}
                                     alt="Norway"
                                   />
                  </Card.Section>

                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>{item.name}</Text>
                    <Badge color="pink"> {item.price} $</Badge>
                  </Group>

                  <Text size="sm" c="dimmed">
                    {item.description}
                  </Text>

                  <Button color="blue" fullWidth mt="md" radius="md">
                    Book classic tour now
                  </Button>
                </Card>
              </Grid.Col>
            );  
          })}
        </Grid>
      </Container>
    </>
  );
};

export default CategoryId_page;
