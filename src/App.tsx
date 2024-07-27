import { useEffect, useState } from "react";

import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { Sub } from "./types";



interface AppState {
  subs: Array<Sub>
}



function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub ])
  }

  useEffect(() => {
  },[])

  return (
   <div>
    <List subs={subs} />
    <Form onNewSub={handleNewSub} />
   </div> 
  );
}

export default App;
