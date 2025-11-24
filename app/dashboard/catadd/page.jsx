"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import React from "react";

const page = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      age: 1,
    },
  });

  return (
    <div>
      <Container size={"xl"} py={"sm"}>
        <Flex align={"center"} gap={"xl"}>
          <Link href={"/dashboard"}>
            <Button variant="light">Ortga Qaytish</Button>
          </Link>
          <Title order={3} tt={"uppercase"}>
            Category Qo'shish
          </Title>
        </Flex>
        <Box mt={"md"}>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Grid align="flex-end">
              <Grid.Col span={{ base: 12, md: 10 }}>
                <TextInput
                  withAsterisk
                  label="Category Name"
                  key={form.key("name")}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 2 }}>
                <Button type="submit">Saqlash</Button>
              </Grid.Col>
            </Grid>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default page;
