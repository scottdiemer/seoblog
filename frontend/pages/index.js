import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <h2>Index Page</h2>
      <Link href="/signup">
        <a>Signup</a>
      </Link>
      <Link href="/signin">
        <a>Signin</a>
      </Link>
    </Layout>
  );
};

export default Index;
