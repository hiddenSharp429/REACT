import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpsPage from "./pages/NewMeetUps";
import FavouritesPage from "./pages/Favourites";
import Nav from "./components/layout/Nav";

function App() {
  return (
    <div>
      <h1>HEllo React</h1>
      <Nav />
      <Routes>
        {/* exact 意味着完全匹配才switch渲染这个页面 */}
        <Route path="/" exact element={<AllMeetUpsPage />}></Route>
        <Route path="/Favourites" element={<FavouritesPage />}></Route>
        <Route path="/new" element={<NewMeetUpsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
