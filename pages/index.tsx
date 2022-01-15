import { useState } from "react";
import { GetStaticProps, NextPage } from "next";

import { User } from "../interfaces";

type Props = {
  users: User[];
};

const HomePage: NextPage<Props> = ({ users: data }) => {
  const [users, setUsers] = useState(data);

  console.log("users", users);

  return (
    <div className="layout">
      <div className="search"></div>
      <div className="table"></div>
      <div className="pagination"></div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users`);
  const { users } = await response.json();

  return { props: { users } };
};

export default HomePage;
