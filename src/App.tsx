import useFetch from "./fetch/useFetch";
import React, { useState } from "react";
import LoadingBlock from './components/LoadingBlock';
import Table from "./components/Table";

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

  return (
    <div className="App">
      <Table data={data}></Table>
    </div>
  );
}

export default App;
