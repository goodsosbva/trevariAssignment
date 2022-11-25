import useFetch from "./fetch/useFetch";
import React, { useState } from "react";
import { css } from '@emotion/react'

import LoadingBlock from './components/LoadingBlock';
import Table from "./components/Table";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [isReady, setReady] = useState < boolean > (false);
  
  const data = useFetch(
    "https://api.json-generator.com/templates/ePNAVU1sgGtQ/data",
    setReady
  )

  if (!isReady) return (
    <LoadingBlock>
    </LoadingBlock>
  );

  const backgroundColor = css`
    background: #515153;
  `

  return (
    <div className="App" style={{backgroundColor: "#515153"}}>
      <Header />
      <Table data={data}></Table>
      <Footer />
    </div>
  );
}

export default App;
