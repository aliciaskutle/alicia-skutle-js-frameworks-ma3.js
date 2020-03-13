import React from "react";
import Heading from "./Heading";
import HomeContent from "./HomeContent";

function Home(props) {
  return (
    <div>
      <Heading content="Title from prop" />
      <HomeContent>
        This will be the children prop inside the HomeContent component.
      </HomeContent>
    </div>
  );
}

export default Home;
