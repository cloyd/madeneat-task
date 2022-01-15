import { GetStaticProps, GetStaticPaths } from "next";
import styled from "@emotion/styled";

import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import ListDetail from "../../components/ListDetail";

type Props = {
  item?: User;
  errors?: string;
};

const ErrorMessage = styled.span`
  color: red;
`;

const StaticPropsDetail = ({ item, errors }: Props) => {
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
    <Layout title={`${item ? item.name : "User Detail"} | Madeneat Task`}>
      {item && <ListDetail item={item} />}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = sampleUserData.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = sampleUserData.find((data) => data.id === Number(id));
    return { props: { item } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
