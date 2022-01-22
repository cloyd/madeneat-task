import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import styled from "@emotion/styled";

import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import { formatDate } from "../../utils/dateFormat";

import Layout from "../../components/Layout";
import ListDetail from "../../components/ListDetail";

type Props = {
  user?: User;
  errors?: string;
};

const ErrorMessage = styled.span`
  color: red;
`;

const UserDetailPage: NextPage<Props> = ({ user, errors }) => {
  if (errors) {
    return (
      <Layout title="Error | Madeneat Task">
        <p>
          <ErrorMessage>Error:</ErrorMessage> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout title={`${user ? user.name : "User Detail"} | Madeneat Task`}>
      {user && <ListDetail item={user} />}
    </Layout>
  );
};

export default UserDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = sampleUserData.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/users/${id}`
    );
    const { user } = await response.json();

    const formattedUser = {
      ...user,
      registered: formatDate(user.registered),
    };

    return { props: { user: formattedUser } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
