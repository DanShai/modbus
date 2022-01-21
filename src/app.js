import { Pane, Spinner } from "evergreen-ui";
import React from "react";
import useFetch from "react-fetch-hook";
import { Dchart } from "./components/charts/DataChart";

const App = () => {
  const { data, isLoading } = useFetch(
    "https://danshai.github.io/dan/tfu.txt",
    {
      formatter: response => response.text()
    }
  );
 
 return isLoading ? (
    <Pane>
      <Spinner marginX="auto" marginY={120} />
    </Pane>
  ) : (
    <Dchart data={data} />
  );
};

export default App;
