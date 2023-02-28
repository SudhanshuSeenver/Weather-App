// import { useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";
import { getWeatherData } from "../store";
import "./searchBar.css";

function SearchBar() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { searchTerm } = state.searchLocation;
  // console.log(state);

  // useEffect(() => {
  //   dispatch(getWeatherData());
  // }, []);

  function handleChangeInput(e) {
    dispatch(changeSearchTerm(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getWeatherData(searchTerm));
  }

  return (
    <div className="app-search-bar">
      <form
        className="app-search-bar-form"
        onSubmit={handleSubmit}
        action="submit"
      >
        <input
          onChange={handleChangeInput}
          value={searchTerm}
          placeholder="Seacrh City"
          className="app-searchBar-text"
          type="text"
        />
        <button className={"app-btn app-search"} type="submit">
          <IoSearch className="app-search-icon" name="search" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
