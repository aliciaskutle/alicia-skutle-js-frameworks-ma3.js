import React from "react";
import Heading from "./Heading";
import NewsList from "./NewsList";

function Home(props) {
  return (
    <div>
      <Heading content="Title from prop" />
      <NewsList />
    </div>
  );
}

export default Home;
