import { useEffect, useState } from "react";

import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { Sub } from "./types";



interface AppState {
  subs: Array<Sub>
}

const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc?/150?u=dapelu",
    description: "Dapelu hace de moderador aveces",
  },
  {
    nick: "Midu",
    subMonths: 100,
    avatar: "https://i.pravatar.cc?/150?u=midu",
    description: "Midu come panacotas",
  },
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc?/150?u=dapelu",
  },
]

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);

  useEffect(() => {
    setSubs(INITIAL_STATE)

  },[])

  return (
   <div>
    <List subs={subs} />
    <Form onNewSub={setSubs} />
   </div> 
  );
}

export default App;
