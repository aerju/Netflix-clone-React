import NavBar from "./components/NavBar/NavBar";
import { orginals, action, comedy, horror, romance } from "./urls";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Posters from "./components/Posters/Posters";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Posters url={orginals} title="Netflix Orginals" />
      <Posters url={action} title="Action Movies" isSmall />
      <Posters url={comedy} title="Comedy Movies" isSmall />
      <Posters url={horror} title="Horror Movies" isSmall />
      <Posters url={romance} title="Romance Movies" isSmall />
    </div>
  );
}

export default App;
