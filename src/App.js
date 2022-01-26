import React, { Fragment, useEffect, useState } from "react";
import Stories from "./components/Stories/Stories";
import "./App.css";

const App = () => {

  return (
    <Fragment>
      <h1>Hacker news stories</h1>
      <Stories/>
    </Fragment>
  );
};

export default App;
