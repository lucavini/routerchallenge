import React from "react";
import Head from "./Head";
import useFetch from "./useFetch";

const Home = () => {
  const [resquest, setResquest] = useFetch();

  React.useEffect(() => {
    setResquest("https://ranekapi.origamid.dev/json/api/produto");
  }, [setResquest]);
  console.log(resquest);

  return (
    <React.Fragment>
      <Head title="Home" />
      <h1>Home</h1>
    </React.Fragment>
  );
};

export default Home;
