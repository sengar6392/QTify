import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchGenresThunk, fetchSongsThunk } from "./features/song/songSlice";
import { fetchNewAlbumsThunk, fetchTopAlbumsThunk } from "./features/album/albumSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSongsThunk());
    dispatch(fetchGenresThunk());
    dispatch(fetchNewAlbumsThunk());
    dispatch(fetchTopAlbumsThunk());
  }, []);
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
