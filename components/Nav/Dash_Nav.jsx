import { Button, Flex } from "@mantine/core";
import Link from "next/link";
import React from "react";

const Dash_Nav = () => {
  return (
    <>
      <Flex gap={"xl"} py={"xl"}>
        <Button>Taxrirlash</Button>
        <Link href={`/dashboard/add`}>
          {" "}
          <Button>Malumot Qoshish</Button>
        </Link>
        <Link href={`/dashboard/catadd`}>
          {" "}
          <Button>Categoriya Qo'shish</Button>
        </Link>
      </Flex>
    </>
  );
};

export default Dash_Nav;
  