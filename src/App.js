import { Routes, Route } from "react-router-dom";
import {  } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<AllMeetupsPage />}></Route>

        <Route exact path="/new-meetup" element={<NewMeetupPage />}></Route>

        <Route exact path="/favourites" element={<FavouritesPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
