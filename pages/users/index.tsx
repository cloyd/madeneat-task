import { GetStaticProps, NextPage } from "next";
import Link from "next/link";

import { User } from "@interfaces/index";
import { formatDate } from "@utils/dateFormat";

import Layout from "@components/Layout";
import List from "@components/List";

type Props = {
  users: User[];
};

const UsersPage: NextPage<Props> = ({ users }) => (
  <Layout title="Users List | Madeneat Task">
    <h1>Users List</h1>
    <p>
      Fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List items={users} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users`);
  const { users } = await response.json();

  const formatedUsers = users.map((user: User) => ({
    ...user,
    registered: formatDate(user.registered),
  }));

  return { props: { users: formatedUsers } };
};

export default UsersPage;
