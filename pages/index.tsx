import { useState } from "react";
import { GetStaticProps, NextPage } from "next";

import { User } from "../interfaces";

import Layout from "../components/Layout";
import Table from "../components/Table";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

type Props = {
  users: User[];
};

const columns = ["name", "gender", "amount", "registered"];

const HomePage: NextPage<Props> = ({ users: data }) => {
  const [users, setUsers] = useState(data);

  const handleSearch = (searchValue) => {
    if (searchValue !== "") {
      const results = users.filter((user) =>
        user.name.toLowerCase().startsWith(searchValue.toLowerCase())
      );
      setUsers(results);
    } else {
      setUsers(data);
    }
  };

  return (
    <Layout title="Users List | Madeneat Task">
      <Search onChange={handleSearch} />
      <Table data={users} columns={columns} />
      <Pagination />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users`);
  const { users } = await response.json();

  return { props: { users } };
};

export default HomePage;
