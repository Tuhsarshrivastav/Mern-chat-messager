import { Route } from "react-router-dom";
import "./App.css";
import Chats from "./pages/Chats";
import HomeScreen from "./pages/HomeScreen";

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomeScreen} />
      <Route path="/chats" component={Chats} />
    </div>
  );
}

export default App;
