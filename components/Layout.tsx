import { FC } from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "@emotion/styled";

type Props = {
  title?: string;
};

const Nav = styled.nav`
  display: flex;
  gap: 1em;
`;

const Layout: FC<Props> = ({
  title = "This is the default title",
  children,
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        |
        <Link href="/about">
          <a>About</a>
        </Link>
        |
        <Link href="/users">
          <a>Users List</a>
        </Link>
        | <a href="/api/users">Users API</a>
      </Nav>
    </header>
    {children}
  </div>
);

export default Layout;
