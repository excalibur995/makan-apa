import { trpc } from "utils/trpc";

const Home = () => {
  const hello = trpc.hello.useQuery({ text: "Makan apa Dong?" });
  if (hello.isLoading) {
    return <div>Loading...</div>;
  }
  return <div>{hello.data?.greeting}</div>;
};

export default Home;
