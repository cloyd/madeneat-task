import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage = () => (
  <Layout title="About | Madeneat Task">
    <h1>About the task</h1>
    <h2>Task: </h2>
    <p>
      You are required to create a table component from scratch with the
      following functionalities:
    </p>
    <ul>
      <li>Search</li>
      <li>Sort</li>
      <li>Pagination</li>
    </ul>
    <p>
      The use of an Off-the-shelf module is not permitted. Use basic styling.
      Load the sample.json using fetch. Handle different errors. Code quality
      and comments will be checked.
    </p>
    <strong>Table fields to show:</strong>
    <ul>
      <li>Name- (full name), sortable, searchable</li>
      <li>Gender</li>
      <li>Amount - sortable</li>
      <li>Registered - format i.e- Friday 24th February @10:45 PM</li>
    </ul>

    <span>
      ** registered current date-time format is in "YYYY-MM-ddThh:mm:ss Z"
    </span>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
