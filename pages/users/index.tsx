import { GetStaticProps } from "next";
import Link from "next/link";

import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import List from "../../components/List";

type Props = {
  users: User[];
};

const WithStaticProps = ({ users }: Props) => (
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
  const users: User[] = sampleUserData;
  return { props: { users } };
};

export default WithStaticProps;
