import { useState } from "react";
import { GetStaticProps, NextPage } from "next";

import { sampleUserData } from "../utils/sample-data";

import { User } from "../interfaces";

import Layout from "../components/Layout";
import Table from "../components/Table";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

type Props = {
  users: User[];
};

const HomePage: NextPage<Props> = ({ users: data }) => {
  const [users, setUsers] = useState(data);

  console.log("users", users);

  return (
    <Layout title="Users List | Madeneat Task">
      <Search
        onChange={(searchValue) => console.log("search text", searchValue)}
      />
      <Table />
      <Pagination />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users`);
  // const { users } = await response.json();

  // return { props: { users } };

  return {
    props: {
      users: sampleUserData,
    },
  };
};

export default HomePage;
