import { useState, createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

export const GlobalContext = createContext();

function App() {
  const [storeCount, setStoreCount] = useState(0);
  return (
    <GlobalContext.Provider value={{storeCount, setStoreCount}}>
      <div className="App">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
