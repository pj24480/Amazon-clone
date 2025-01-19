import "./App.css";
import Home from "./pages/Home";
import TopNav from "./components/TopNav";
import Navbar from "./components/Navbar";
import context from "./redux/context";
import { light } from "@mui/material/styles/createPalette";

function App() {
  return (
    <>
      <context.Provider value={context}>
        <Navbar />
      </context.Provider>
      {/* <TopNav />
      <Navbar />
      <Home /> */}
    </>
  );
}

export default App;
